import { Directive, OnInit, ElementRef, Input } from '@angular/core'
import { checkDefined } from './utils/check-defined'
import { switchClass } from './utils/control-class-list';

const predefined = [
  {def: ''},
  {def: 'text'},
  {def: 'justified'},
  {def: 'left',   value: 'left aligned'},
  {def: 'center', value: 'center aligned'},
  {def: 'right',  value: 'right aligned'},
]

@Directive({
  selector: '[uiContainer]',
})
export class ContainerDirective implements OnInit {

  @Input('uiContainer') type = ''
  private elem: HTMLElement

  constructor(elemRef: ElementRef) {
    this.elem = elemRef.nativeElement
  }

  ngOnInit() {
    this.elem.classList.add('ui', 'container')

    if (!checkDefined(predefined, this.type)) {
      return
    }

    switchClass(this.elem.classList, predefined, this.type)
  }

}
