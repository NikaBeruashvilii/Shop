import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './view/shopping-cart/shopping-cart.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { ProductsComponent } from './view/products/products.component';
import { CheckOutComponent } from './view/check-out/check-out.component';
import { OrderSuccessComponent } from './view/order-success/order-success.component';
import { LoginComponent } from './view/login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './view/my-orders/my-orders.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "products", component:ProductsComponent},
  {path: "shopping-cart", component:ShoppingCartComponent},
  {path: "check-out", component:CheckOutComponent},
  {path: "order-success", component:OrderSuccessComponent},
  {path: "login", component:LoginComponent},
  {path: "admin-products", component:AdminProductsComponent},
  {path: "my-orders", component:MyOrdersComponent},
  {path: "admin-orders", component:AdminOrdersComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
