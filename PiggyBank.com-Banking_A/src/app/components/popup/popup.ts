import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.html',
  styleUrl: './popup.css',
})
export class PopupComponent {
  @Input() text: string = ''
  @Input() button1: string = ''
  @Input() button2: string = ''

  @Output() confirmed = new EventEmitter<void>()
  @Output() declined = new EventEmitter<void>()

  confirm(): void {
    this.confirmed.emit()
    alert('Question sent!')
  }

  decline(): void {
    this.declined.emit()
  }
}
