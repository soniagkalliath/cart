import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  searchKey:any;
  public productList : any ;
  constructor(private api:ApiService,private cartService:CartService,private wish:WishListService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe((result:any)=>{
      // console.log(result.products);
      this.productList = result.products
      this.productList.forEach((a:any) => {
        
        Object.assign(a,{quantity:1,total:a.price});
      });
    })

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
//wishlist
  addList(product:any){
    console.log(product);
    
this.wish.addtowlist(product).subscribe(
  (result:any)=>{
    alert(result.message)
},
result=>{
  alert(result.error.message)
}
)  

 
  }
}
