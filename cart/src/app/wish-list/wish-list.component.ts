import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishList:any
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    if(localStorage.getItem("wishList")){
      this.wishList = JSON.parse(localStorage.getItem("wishList"))
      console.log(this.wishList);
      
    }
  }

  removeList(product:any){
    let removeItemList = this.wishList.filter((item:any)=>item.id!=product.id)
    localStorage.setItem('wishList',JSON.stringify(removeItemList))
    this.wishList = JSON.parse(localStorage.getItem("wishList"))

  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
