import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishList:any
  constructor(private cartService:CartService,private wlist:WishListService) { }

  ngOnInit(): void {
    // if(localStorage.getItem("wishList")){
    //   this.wishList = JSON.parse(localStorage.getItem("wishList"))
    //   console.log(this.wishList);
    // }
    this.wlist.getWishlist().subscribe(
      (result:any)=>{
        this.wishList = result.wishlist
      }
    )
  }

  removeList(product:any){
    // let removeItemList = this.wishList.filter((item:any)=>item.id!=product.id)
    // localStorage.setItem('wishList',JSON.stringify(removeItemList))
    // this.wishList = JSON.parse(localStorage.getItem("wishList"))
    this.wlist.removeItemWlist(product.id).subscribe(
      (result:any)=>{
        console.log(result);
        
        this.wishList = result.wishlist
      }
    )
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
    this.removeList(item)
  }
}
