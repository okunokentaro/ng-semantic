import { NgModule } from '@angular/core'

import { ButtonComponent } from './src/button'
import { GridComponent } from './src/grid'
import { ColumnComponent } from './src/column'
import { ContainerDirective } from './src/container'

@NgModule({
  declarations: [
    ButtonComponent,
    GridComponent,
    ColumnComponent,
    ContainerDirective,
  ],
  exports     : [
    ButtonComponent,
    GridComponent,
    ColumnComponent,
    ContainerDirective,
  ]
})
export class NgSemanticModule {
}
