import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {CartDetailsComponent} from './cart-details.component';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, MatListModule,NgIf, NgForOf, AsyncPipe, CommonModule],
  declarations: [CartDetailsComponent],
  providers: [],
  exports: [CartDetailsComponent]
})
export class CartDetailsComponentModule {
}
