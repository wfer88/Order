import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import{ HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    OrderComponent,
    NavMenuComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
