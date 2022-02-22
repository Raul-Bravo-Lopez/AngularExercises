import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-product-exercise';

  products: Product[]=
  [{code:"325ifg3", name:"Pack 2 Palmeritas", price:1.80, units:2, total:0}];

getPrice(){

  for(let i=0;i<this.products.length;i++){

    this.products[i].total=this.products[i].price*this.products[i].units;
    console.log(this.products[i].total);
  }

}

constructor(){

this.getPrice();

}

}
