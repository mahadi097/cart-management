import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { MaterialModule } from './material.module';
import { ProductCreateComponent } from './product/product-crud/product-create/product-create.component';
import { ProductCrudComponent } from './product/product-crud/product-crud.component';
import { ProductUpdateComponent } from './product/product-crud/product-update/product-update.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ProductListComponent },
  { path: 'product-list', component: ProductCrudComponent },
  { path: 'shopping-list', component: CartListComponent },
  { path: 'add-product', component: ProductCreateComponent },
  { path: 'edit-product/:id', component: ProductUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
