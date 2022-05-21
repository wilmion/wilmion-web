import { FormBuilder, FormGroup } from '@angular/forms';

const control = new FormBuilder().control('NOT EXIST FORM OR ID FORM');

export function getValue(form: FormGroup | undefined, name: string) {
  if (!form) return control;

  const abstract = form.get(name);

  if (!abstract) return control;

  return abstract;
}
