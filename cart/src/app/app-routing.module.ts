import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  //AllProductsComponent
  {
    path:'',component:AllProductsComponent
  },
  //CartComponent
  {
    path:'cart',component:CartComponent
  },
  //WishListComponent
  {
    path:'wish-list',component:WishListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
