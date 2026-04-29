import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import Lenis from 'lenis';
import { LoaderComponent } from './components/loader/loader';
import { NotificationComponent } from './components/notification/notification';
import { NotificationService } from './services/notification/notification.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, LoaderComponent, NotificationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  // variables
  protected readonly title = signal('PiggyBank.com-Banking_A');
  protected isLoading = signal(true);
  protected isHiding = signal(false);
  protected isVisible = signal(false);
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  // DI
  constructor(protected notificationService: NotificationService) {}

  ngOnInit(): void {
    // lenis smooth scroll
    const lenis = new Lenis({ lerp: 0.1 });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    lenis.scrollTo(0);

    // sets loader before displaying content
    this.timeoutId = setTimeout(() => {
      this.isHiding.set(true); // loader hides in 2s
      setTimeout(() => {
        this.isLoading.set(false); // loader loades for 3ms
        setTimeout(() => {
          this.isVisible.set(true); // content is visible in 5ms
        }, 500);
      }, 300);
    }, 2000);
  }

  // clear timeout
  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
