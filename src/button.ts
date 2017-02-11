import {
  AfterViewInit, Component, ElementRef, Input,
  ViewChild
} from '@angular/core'

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
export class ButtonComponent implements AfterViewInit {
  @ViewChild('BUTTON') buttonRef: ElementRef
  private button: HTMLButtonElement
  private _disabled = false

  constructor() { }

  ngAfterViewInit() {
    this.button = this.buttonRef.nativeElement
  }

  @Input()
  set inverted(v: boolean) {
    this.toggleClass('inverted', v)
  }

  @Input()
  set basic(v: boolean) {
    this.toggleClass('basic', v)
  }

  @Input()
  set primary(v: boolean) {
    this.toggleClass('primary', v)
  }

  @Input()
  set disabled(v: boolean) {
    this._disabled = v
    this.toggleClass('disabled', v)
  }

  @Input()
  set color(colorName: string) {
    const predefinedColors = [
      'red',
      'orange',
      'yellow',
      'olive',
      'green',
      'teal',
      'blue',
      'violet',
      'purple',
      'pink',
      'brown',
      'grey',
      'black',
    ]

    if (!predefinedColors.some(v => v === colorName)) {
      console.error(`The specified color is not defined: ${colorName}`);
      return
    }

    predefinedColors.forEach(v => this.buttonRef.nativeElement.classList.remove(v))
    this.buttonRef.nativeElement.classList.add(colorName)
  }

  private toggleClass(className: string, v: boolean) {
    if (v) {
      this.buttonRef.nativeElement.classList.add(className)
    } else {
      this.buttonRef.nativeElement.classList.remove(className)
    }
  }

}
