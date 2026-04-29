import { FormControl } from "@angular/forms";

export interface AddCardForm {
  holder: FormControl<string>;
  number: FormControl<string>;
  expDate: FormControl<string>;
  cvc: FormControl<string>;
}
