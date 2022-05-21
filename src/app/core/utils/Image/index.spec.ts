import { blobToFile } from '.';

describe('Image - Utils', () => {
  let blob: Blob;
  let base64: string;

  beforeEach(() => {
    base64 =
      'data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7';

    blob = new Blob([base64], { type: 'text/plain' });
  });

  it('blobToFile: Should be a file', () => {
    const result = blobToFile(blob, 'EXAMPLE_NAME_OF_BLOB');

    const expected = 'EXAMPLE_NAME_OF_BLOB';

    expect(result.name).toBe(expected);
  });
});
