import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule, routes } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, LazyRoutingModule],
})
export class LazyModule {
  static MODULE_INITIALIZER() {
    routes.push({
      path: '',
      component: LazyComponent,
    });
  }
}
