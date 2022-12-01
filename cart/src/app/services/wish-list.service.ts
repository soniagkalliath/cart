import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  wishList = new BehaviorSubject<any>([]);

  wishItemList:any=[]
  constructor(private http:HttpClient) { }

  addtowlist(product:any){

    // this.wishItemList.push(product);
    // this.wishList.next(this.wishItemList);
    // let wlist = this.wishList['_value'];
    // localStorage.setItem('wishList',JSON.stringify(wlist))
    

    //api call to add item to wishlist
    return this.http.post('http://localhost:3000/add-to-wlist',product)
  }
  getWishlist(){
    return this.http.get('http://localhost:3000/get-wishlist')
  }
  removeItemWlist(id:any){
    return this.http.delete('http://localhost:3000/remove-item-wishlist/'+id)
  }
}
