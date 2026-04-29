import { FormControl } from "@angular/forms";

export interface LoginForm {
  name: FormControl<string>;
  surname: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string>;
}
