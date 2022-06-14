import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { CartDropdownMenuComponent } from './cart/cart-dropdown-menu/cart-dropdown-menu.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { ProductService } from './product/product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CartService } from './cart/cart.service';
import { ProductCreateComponent } from './product/product-crud/product-create/product-create.component';
import { ProductUpdateComponent } from './product/product-crud/product-update/product-update.component';
import { ProductDeleteComponent } from './product/product-crud/product-delete/product-delete.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ProductCrudComponent } from './product/product-crud/product-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListComponent,
    HeaderComponent,
    CartDropdownMenuComponent,
    CartItemComponent,
    CartListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ProductCrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    FormsModule,
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
