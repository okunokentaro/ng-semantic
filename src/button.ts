import {
  Component, ElementRef, Input, ViewChild
} from '@angular/core'
import { checkDefined } from './utils/check-defined';
import { switchClass, toggleClass } from './utils/control-class-list';

const predefined = [
  {def: 'red'},
  {def: 'orange'},
  {def: 'yellow'},
  {def: 'olive'},
  {def: 'green'},
  {def: 'teal'},
  {def: 'blue'},
  {def: 'violet'},
  {def: 'purple'},
  {def: 'pink'},
  {def: 'brown'},
  {def: 'grey'},
  {def: 'black'},
]

@Component({
  selector: 'ui-button',
  template: `
    <button
      #BUTTON
      class="ui button"
      [attr.disabled]="_disabled ? true : null"
    >
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {

  @ViewChild('BUTTON') buttonRef: ElementRef
  private button: HTMLButtonElement
  private _disabled = false

  @Input()
  set inverted(v: boolean) {
    toggleClass(this.buttonRef.nativeElement.classList, 'inverted', v)
  }

  @Input()
  set basic(v: boolean) {
    toggleClass(this.buttonRef.nativeElement.classList, 'basic', v)
  }

  @Input()
  set primary(v: boolean) {
    toggleClass(this.buttonRef.nativeElement.classList, 'primary', v)
  }

  @Input()
  set disabled(v: boolean) {
    this._disabled = v
    toggleClass(this.buttonRef.nativeElement.classList, 'disabled', v)
  }

  @Input()
  set color(name: string) {
    if (!checkDefined(predefined, name)) {
      return
    }
    switchClass(this.buttonRef.nativeElement.classList, predefined, name)
  }

}
