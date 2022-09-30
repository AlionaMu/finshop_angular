import { Component } from '@angular/core';

const images = [
  {path: '../../../assets/images/sber.png'},
  {path: '../../../assets/images/finshop.png'},
  {path: '../../../assets/images/dabrabyt.png'},
  {path: '../../../assets/images/belagro.png'},
  {path: '../../../assets/images/belveb.png'},
  {path: '../../../assets/images/alfa.png'}
]

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent {
  public images: any = images;

  constructor() { }
}
