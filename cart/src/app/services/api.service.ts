import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

   //to get all product
   getProduct() {
    return this.http.get("http://localhost:3000/all-products")
      // .pipe(map((res: any) => {
      //   return res;
      // }))
  }

}
