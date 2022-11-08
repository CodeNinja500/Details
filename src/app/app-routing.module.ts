import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgeComponent } from './components/age/age.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NameDetailsComponent } from './components/name-details/name-details.component';
import { NameFormComponent } from './components/name-form/name-form.component';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatServiceModule } from './services/cat.service-module';
import { AgeComponentModule } from './components/age/age.component-module';
import { AgeCalcServiceModule } from './services/age-calc.service-module';
import { CartDetailsComponentModule } from './components/cart-details/cart-details.component-module';
import { CartServiceModule } from './services/cart.service-module';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { UserServiceModule } from './services/user.service-module';
import { NameDetailsComponentModule } from './components/name-details/name-details.component-module';
import { GenderServiceModule } from './services/gender.service-module';
import { NationalityServiceModule } from './services/nationality.service-module';
import { NameFormComponentModule } from './components/name-form/name-form.component-module';

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'cat-fact', component: CatFactComponent },
    { path: 'age/:name', component: AgeComponent },
    { path: 'cart/:id', component: CartDetailsComponent },
    { path: 'user/:id', component: UserDetailsComponent },
    { path: 'name-details/:name', component: NameDetailsComponent },
    { path: 'name-form', component: NameFormComponent }
  ]), ProductDetailsComponentModule, ProductServiceModule, CatFactComponentModule, CatServiceModule, AgeComponentModule, AgeCalcServiceModule, CartDetailsComponentModule, CartServiceModule, UserDetailsComponentModule, UserServiceModule, NameDetailsComponentModule, GenderServiceModule, NationalityServiceModule, NameFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
