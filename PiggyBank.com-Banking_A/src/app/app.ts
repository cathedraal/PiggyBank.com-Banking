import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('PiggyBank.com-Banking_A');

  ngOnInit(): void {
    const lenis = new Lenis({ lerp: 0.08 });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    lenis.scrollTo(0)
  }
}
