import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ButtonDemoComponent } from './button-demo/button-demo.component'
import { ContainerDemoComponent } from './container-demo/container-demo.component'
import { GridDemoComponent } from './grid-demo/grid-demo.component'

const appRoutes: Routes = [
  {
    path     : '',
    component: HomeComponent
  },
  {
    path     : 'button',
    component: ButtonDemoComponent
  },
  {
    path     : 'container',
    component: ContainerDemoComponent
  },
  {
    path     : 'grid',
    component: GridDemoComponent
  },
  {
    path     : '**',
    component: HomeComponent
  }
]

export const ROUTING = RouterModule.forRoot(appRoutes, {useHash: true})
