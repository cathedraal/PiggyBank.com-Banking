import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import Lenis from 'lenis';
import { LoaderComponent } from './components/loader/loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, HeaderComponent, LoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('PiggyBank.com-Banking_A');
  protected isLoading = signal(true)
  protected isHiding = signal(false)
  protected isVisible = signal(false)
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    const lenis = new Lenis({ lerp: 0.08 });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    lenis.scrollTo(0)

    this.timeoutId = setTimeout(() => {
      this.isHiding.set(true)
      setTimeout(() => {
        this.isLoading.set(false)
        setTimeout(() => {
          this.isVisible.set(true)
        }, 500)
      }, 300)
    }, 2000)
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  } 
}
