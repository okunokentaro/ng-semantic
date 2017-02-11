import { NgModule } from '@angular/core'

import { ButtonComponent } from './src/button'
import { GridComponent } from './src/grid'
import { ColumnComponent } from './src/column'
import { ContainerComponent } from './src/container'

@NgModule({
  declarations: [
    ButtonComponent,
    GridComponent,
    ColumnComponent,
    ContainerComponent,
  ],
  exports     : [
    ButtonComponent,
    GridComponent,
    ColumnComponent,
    ContainerComponent,
  ]
})
export class NgSemanticModule {
}
