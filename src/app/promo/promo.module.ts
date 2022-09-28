import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoComponent } from './components/promo/promo.component';

@NgModule({
  declarations: [
    PromoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PromoComponent
  ]
})
export class PromoModule { }
