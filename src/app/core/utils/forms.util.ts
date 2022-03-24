import { FormGroup } from '@angular/forms';

export function getValue(form: FormGroup | undefined, name: string) {
  if (!form) throw new Error('Not form found 😑');

  const abstract = form.get(name);

  if (!abstract) throw new Error('Id incorrect ❌');

  return abstract;
}
