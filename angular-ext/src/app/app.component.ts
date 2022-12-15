import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 productList = [
   {name: 'Boot Claudio', price: 84},
   {name: 'Claudio helmet', price: 999},
   {name: 'Claudio gloves', price: 99}
  ];
 cartProductList = [];

 addProductToCart(product) {
   const productExistInCart = this.cartProductList.find(({name}) => name === product.name); 
   if (!productExistInCart) {
     this.cartProductList.push({...product, num:1}); 
     return;
   }
   productExistInCart.num += 1;
 }
  removeProduct(product) {
   this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
  }
}

