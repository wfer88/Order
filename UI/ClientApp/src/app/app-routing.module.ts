import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "user", component: UserComponent },
  { path: "product", component: ProductComponent },
  { path: "order", component: OrderComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
