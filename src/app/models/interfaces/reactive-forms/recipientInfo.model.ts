import { FormControl } from "@angular/forms";

export interface RecipientInfoForm {
  name: FormControl<string>;
  surname: FormControl<string>;
  email: FormControl<string>;
}
