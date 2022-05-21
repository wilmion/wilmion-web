import { FormBuilder, FormGroup } from '@angular/forms';

import { getValue } from './index';

describe('Forms - utils', () => {
  let form: FormGroup | undefined;

  beforeEach(() => {
    form = new FormBuilder().group({
      'id-field': ['yeah!'],
    });
  });

  describe('getValue', () => {
    it('Should return a example form control when the form not exist', () => {
      form = undefined;

      const result = getValue(form, 'ID');
      const expected = 'NOT EXIST FORM OR ID FORM';

      expect(result.value).toBe(expected);
    });

    it('Should return a example form control when the form exist but the id not exist in the form', () => {
      const result = getValue(form, 'NOT_EXIST_ID');
      const expected = 'NOT EXIST FORM OR ID FORM';

      expect(result.value).toBe(expected);
    });

    it('Should return a control of the form', () => {
      const result = getValue(form, 'id-field');

      expect(result.value).toBe('yeah!');
    });
  });
});
