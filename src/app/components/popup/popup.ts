import { Component, EventEmitter, Input, Output } from '@angular/core';
import { supportButtonItem } from '../../models/interfaces/supports.model';
import { SUPPORT_BUTTONS } from '../../constants/constants';

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
  @Output() closed = new EventEmitter<void>()

  supportButtons: supportButtonItem[] = SUPPORT_BUTTONS

  confirm(value: string = ''): void {
    this.confirmed.emit(value)
  }

  decline(): void {
    this.declined.emit()
  }

  close(): void {
    this.closed.emit()
  }

  onInputValueChange(event: Event, input: HTMLTextAreaElement) {
    const button = event.target as HTMLButtonElement
    input.value = button.value
  }
}
