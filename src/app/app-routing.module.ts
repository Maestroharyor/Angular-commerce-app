import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './routes/home/home.component';
import { ProductDetailComponent } from './routes/product-detail/product-detail.component';
import { CartComponent } from './routes/cart/cart.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { CheckoutComponent } from './routes/checkout/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FontAwesomeModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  HomeComponent,
  ProductDetailComponent,
  CartComponent,
  CheckoutComponent,
  NotFoundComponent,
];
