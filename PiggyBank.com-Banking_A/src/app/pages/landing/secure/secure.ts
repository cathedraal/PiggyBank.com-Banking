import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-secure',
  imports: [],
  templateUrl: `./secure.html`,
  styleUrl: './secure.css',
})
export class SecureComponent implements AfterViewInit {

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
