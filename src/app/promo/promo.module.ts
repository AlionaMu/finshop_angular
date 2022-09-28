import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoComponent } from './components/promo/promo.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    PromoComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule
  ],
  exports: [
    PromoComponent
  ]
})
export class PromoModule { }
