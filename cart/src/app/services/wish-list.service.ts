import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  wishList = new BehaviorSubject<any>([]);

  wishItemList:any=[]
  constructor() { }

  addtowlist(product:any){

    this.wishItemList.push(product);
    // this.http.post("http://localhost:3000/add-to-cart",product)
    // .subscribe((res)=>{
    //   console.log(res);
      
    // })
    this.wishList.next(this.wishItemList);
    let wlist = this.wishList['_value'];
    localStorage.setItem('wishList',JSON.stringify(wlist))
    
  }
}
