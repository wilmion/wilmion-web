import { Text } from '@models/language_text.model';

const regexExtractProperties = /(\[.*\])(\{(line)?(next)?\})/;
const regexProperties =
  /\[id='(\d+)'(l='(.*)')(c='(#\w{6,6})')(s='(.*)')\]\[(.*)\]/;

const regexText = /(\[[^\[\]]*\]){2,2}\{[^\{\}]*\}/g;

// Internal Functions (Only exported in tests)

export function generateIndex(texts: Text[]) {
  let newIndex: number = 0;

  texts.forEach((text) => {
    newIndex += Number(text.id);
  });

  return String(newIndex);
}

export function decodeLine(text: string): Text {
  const matches = text.match(regexExtractProperties) as RegExpMatchArray;

  const propsStrings = matches[1];
  let line = matches[2] as any;

  line = line.replace('{', '');
  line = line.replace('}', '');

  const props = propsStrings.match(regexProperties) as RegExpMatchArray;

  const id = props[1];
  const link = props[3];
  const color = props[5];
  const style = props[7] as any;
  const content = props[8];

  return {
    id,
    link,
    color,
    style,
    content,
    line,
  };
}

// Export functions

export function decodeText(text: string) {
  const subsections = [...text.matchAll(regexText)] as RegExpMatchArray[];

  const results: any[] = [];

  subsections.forEach((section) => {
    const props = decodeLine(section[0]);
    results.push(props);
  });

  return results;
}

export function addTextInPart(
  content: string,
  value: string,
  { id, link, line, color, style }: Text
) {
  const regex = new RegExp(`(\\[.*\\]?)?\\[id='${id}'.*\\]\\[.*${value}`);

  let stringied: RegExpMatchArray | string = content.match(
    regex
  ) as RegExpMatchArray;

  let otherPart = content.replace(stringied[0], '');

  const propOfContent = decodeText(content);

  const propOfOtherPart = propOfContent[propOfContent.length - 1];

  otherPart = `[id='${propOfOtherPart.id}'l='${propOfOtherPart.link}'c='${propOfOtherPart.color}'s='${propOfOtherPart.style}'][${otherPart}`;

  stringied = stringied[0].substring(0, stringied[0].length - value.length);

  stringied += ']{next}';

  stringied += `[id='${generateIndex(
    propOfContent
  )}'l='${link}'c='${color}'s='${style}'][${value}]{${line}}${otherPart}`;

  return stringied;
}

export function addText(content: string, value: string) {
  content += `[id='${generateIndex(
    decodeText(content)
  )}'l=''c=''s=''][${value}]{next}`;

  return content;
}

export function editText(content: string, textProps: Text) {
  const properties = decodeText(content).find(
    (s) => s.id === textProps.id
  ) as Text;

  const oldPhrase = `[id='${properties.id}'l='${properties.link}'c='${properties.color}'s='${properties.style}'][${properties.content}]{${properties.line}}`;
  const newPharse = `[id='${properties.id}'l='${textProps.link}'c='${textProps.color}'s='${textProps.style}'][${textProps.content}]{${textProps.line}}`;

  content = content.replace(oldPhrase, newPharse);

  return content;
}

export function removeText(content: string, id: string) {
  const properties = decodeText(content).find((s) => s.id === id) as Text;

  const oldPhrase = `[id='${properties.id}'l='${properties.link}'c='${properties.color}'s='${properties.style}'][${properties.content}]{${properties.line}}`;

  content = content.replace(oldPhrase, '');

  return content;
}
