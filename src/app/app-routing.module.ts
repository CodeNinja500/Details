import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgeComponent } from './components/age/age.component';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatServiceModule } from './services/cat.service-module';
import { AgeComponentModule } from './components/age/age.component-module';
import { AgeCalcServiceModule } from './services/age-calc.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product/:id', component: ProductDetailsComponent }, { path: 'cat-fact', component: CatFactComponent }, { path: 'age/:name', component: AgeComponent }]), ProductDetailsComponentModule, ProductServiceModule, CatFactComponentModule, CatServiceModule, AgeComponentModule, AgeCalcServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
