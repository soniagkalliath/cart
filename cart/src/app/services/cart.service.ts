import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList = new BehaviorSubject<any>([]);
 
  cartItemList:any=[];
  public search = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) {}

  // add to cart by product component
  addtoCart(product : any){
    console.log(product);
    this.cartItemList.push(product);
     this.productList.next(this.cartItemList);
     this.getTotalPrice();   
  }

  //get product to display in cart page
  getProducts(){
    return this.productList.asObservable();
  }
  //total price
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price;
      console.log(grandTotal);
      
    })
    return grandTotal;
  }
  
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
