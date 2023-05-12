import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/headers/main-header/main-header.component';
import { MobileHeaderComponent } from './components/headers/mobile-header/mobile-header.component';
import { DefaultLayoutComponent } from './components/layouts/default-layout/default-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/categories.service';
import { ProductcardComponent } from './components/partials/cards/productcard/productcard.component';
import { CartModalComponent } from './components/partials/modals/cartModal/cart-modal/cart-modal.component';
import { CartmodalcardComponent } from './components/partials/cart/cartmodalcard/cartmodalcard.component';
import { CartPageCardComponent } from './components/partials/cart/cartpagecard/cart-page-card/cart-page-card.component';
import { TaxPipe } from './pipes/tax.pipe';
import { CheckoutComponent } from './routes/checkout/checkout/checkout.component';
import { CustomDatePipe } from './pipes/date.pipe';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  declarations: [
    TaxPipe,
    CustomDatePipe,
    AppComponent,
    MainHeaderComponent,
    MobileHeaderComponent,
    DefaultLayoutComponent,
    routingComponents,
    NotFoundComponent,
    ProductcardComponent,
    CartModalComponent,
    CartmodalcardComponent,
    CartPageCardComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    Angular4PaystackModule.forRoot(
      'sk_test_d61ebe0c6f5c39025768cebaa7d3a12a92fced29'
    ),
  ],
  providers: [ProductsService, CategoriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
