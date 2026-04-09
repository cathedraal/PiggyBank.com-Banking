import { Component } from '@angular/core';
import { faqItem } from '../../../models/interfaces/faqs.model';
import { FAQS_SECTION } from '../../../constants/constants';

@Component({
  selector: 'app-faqs',
  imports: [],
  templateUrl: `./faqs.html`,
  styleUrl: './faqs.css',
})
export class FaqsComponent {
  faqs: faqItem[] = FAQS_SECTION;

  toggle(index: number): void {
    if (this.faqs[index].active === false) {
      this.faqs[index].active = true;
    } else {
      this.faqs[index].active = false;
    }
  }
}
