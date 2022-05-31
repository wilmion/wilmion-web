import { Text } from '@core/models/language_text.model';

import {
  addText,
  addTextInPart,
  decodeLine,
  decodeText,
  editText,
  generateIndex,
  removeText,
} from '.';

describe('Language Text', () => {
  let textTest: string;

  beforeEach(() => {
    textTest =
      "[id='5'l='https://platzi.com'c='#fff664's='underline'][Hola este es link un texto]{next}[id='2'l='https://platzi.com.pe'c='#fff667's='solid'][Hola este es un texto]{line}";
  });

  describe('Internal functions', () => {
    it('generateIndex: Generate index for the id field in the string', () => {
      const info: Text[] = [
        {
          id: '5',
          line: 'line',
          link: 'https://',
          color: '#4555455',
          content: 'hello',
          style: 'none',
        },
        {
          id: '2',
          line: 'line',
          link: 'https://',
          color: '#4555455',
          content: 'hello',
          style: 'none',
        },
      ];

      const expected = '7';
      const result = generateIndex(info);

      expect(result).toBe(expected);
    });

    it('decodeLine: Generate object that contains the properties of the line', () => {
      const expected: Text = {
        id: '5',
        line: 'next',
        link: 'https://platzi.com',
        color: '#fff664',
        content: 'Hola este es link un texto',
        style: 'underline',
      };

      const line =
        "[id='5'l='https://platzi.com'c='#fff664's='underline'][Hola este es link un texto]{next}";

      const result = decodeLine(line);

      expect(result).toEqual(expected);
    });
  });

  describe('External functions', () => {
    it('decodeText: Return a Array with the properties of the lines', () => {
      const expected: Text[] = [
        {
          id: '5',
          line: 'next',
          link: 'https://platzi.com',
          color: '#fff664',
          content: 'Hola este es link un texto',
          style: 'underline',
        },
        {
          id: '2',
          line: 'line',
          link: 'https://platzi.com.pe',
          color: '#fff667',
          content: 'Hola este es un texto',
          style: 'solid',
        },
      ];

      const result = decodeText(textTest);

      expect(result).toEqual(expected);
    });

    it('addTextInPart: Add text around the part of text', () => {
      const expected =
        "[id='5'l='https://platzi.com'c='#fff664's='underline'][Hola este es ]{next}[id='7'l=''c='#ffffff's='none'][link]{line}[id='2'l='https://platzi.com.pe'c='#fff667's='solid'][ un texto]{next}[id='2'l='https://platzi.com.pe'c='#fff667's='solid'][Hola este es un texto]{line}";

      const result = addTextInPart(textTest, 'link', {
        id: '5',
        line: 'line',
        link: '',
        style: 'none',
        color: '#ffffff',
        content: '',
      });

      expect(result).toBe(expected);
    });

    it('addText: Return a text with the new node', () => {
      const expected: string =
        "[id='5'l='https://platzi.com'c='#fff664's='underline'][Hola este es link un texto]{next}[id='2'l='https://platzi.com.pe'c='#fff667's='solid'][Hola este es un texto]{line}[id='7'l=''c=''s=''][HOLa]{next}";

      const result = addText(textTest, 'HOLa');

      expect(result).toBe(expected);
    });

    it('editText: Return a text with the info edited', () => {
      const expected =
        "[id='5'l='https://platzi.com'c='#fff664's='underline'][Hola este es link un texto]{next}[id='2'l='https://wilmion.com'c='#fffff's='none'][otro]{next}";

      const result = editText(textTest, {
        id: '2',
        line: 'next',
        link: 'https://wilmion.com',
        color: '#fffff',
        style: 'none',
        content: 'otro',
      });

      expect(result).toBe(expected);
    });

    it('removeText: Should be a text without the line with the ID 5', () => {
      const expected =
        "[id='2'l='https://platzi.com.pe'c='#fff667's='solid'][Hola este es un texto]{line}";

      const result = removeText(textTest, '5');

      expect(result).toBe(expected);
    });
  });
});
