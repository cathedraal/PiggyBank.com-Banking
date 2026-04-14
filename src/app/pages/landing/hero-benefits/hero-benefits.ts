import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { HERO_BENEFITS_SECTION } from '../../../constants/constants';

@Component({
  selector: 'app-hero-benefits',
  imports: [],
  templateUrl: `./hero-benefits.html`,
  styleUrl: './hero-benefits.css',
})
export class HeroBenefitsComponent implements AfterViewInit {
  benefits: string[] = HERO_BENEFITS_SECTION

  @ViewChild('mainEl') // search for this DOM element
  mainEl!: ElementRef<HTMLElement>; // creating a variable which is awaiting a 'box' (ElementRef) with a DOM element in it (<HTMLElement>)

  /**
   * lifecycle hook which is called automatically -> called when this HTML element exists on DOM
   */
  ngAfterViewInit(): void {
    const el = this.mainEl.nativeElement; // el is now a DOM element

    // scroll spectator -> browser API
    const observer = new IntersectionObserver(
      (entries, obs) => {
        // entries, obs are callback params

        // if this DOM element is seen on screen,
        if (entries[0].isIntersecting) {
          el.classList.add('show'); // -> add a 'show' CSS class
          obs.disconnect(); // -> & disconnect IntersectionObserver (further animations) for this DOM element
        }
      },
      {
        threshold: 0.2, // this DOM element is seen if 20% of it's content is seen on screen
      },
    );

    observer.observe(el); // spectate this DOM element
  }
}
