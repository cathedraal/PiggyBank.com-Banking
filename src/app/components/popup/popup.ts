import { Component, EventEmitter, Input, Output } from '@angular/core';
import { supportButtonItem } from '../../models/interfaces/default/supports.model';
import { SUPPORT_BUTTONS } from '../../constants/popup';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.html',
  styleUrl: './popup.css',
})
export class PopupComponent {
  // inputs
  @Input() text: string = ''
  @Input() button1: string = ''
  @Input() button2: string = ''
  @Input() popupContext: null | string = ''

  // outputs
  @Output() confirmed = new EventEmitter<any>()
  @Output() declined = new EventEmitter<void>()
  @Output() closed = new EventEmitter<void>()

  // html template
  supportButtons: supportButtonItem[] = SUPPORT_BUTTONS

  confirm(value: any = ''): void {
    this.confirmed.emit(value)
  }

  decline(): void {
    this.declined.emit()
  }

  close(): void {
    this.closed.emit()
  }

  /**
   * Gets input value from text area field from popup with support context
   * @param event Event
   * @param input Input
   */
  onInputValueChange(event: Event, input: HTMLTextAreaElement) {
    const button = event.target as HTMLButtonElement
    input.value = button.value
  }
}
