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

  constructor(private http:HttpClient) {
    
    // if(this.wishList){
    //   console.log(this.wishList);

    //   //localStorage.setItem("wishList",JSON.stringify(this.wishList))
    // }
   }

  // add to cart by product component
  addtoCart(product : any){
    console.log(product);
    
    this.cartItemList.push(product);
    // this.http.post("http://localhost:3000/add-to-cart",product)
    // .subscribe((res)=>{
    //   console.log(res);
      
    // })
    this.productList.next(this.cartItemList);
     this.getTotalPrice();
    // console.log(this.cartItemList)
    // console.log(this.productList);
    
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
