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
  @Input() popupContext: null | string = ''

  @Output() confirmed = new EventEmitter<string>()
  @Output() declined = new EventEmitter<void>()

  confirm(value: string = ''): void {
    this.confirmed.emit(value)
  }

  decline(): void {
    this.declined.emit()
  }
}
