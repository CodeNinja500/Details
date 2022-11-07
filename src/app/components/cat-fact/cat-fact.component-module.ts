import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CatFactComponent } from './cat-fact.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, NgIf, AsyncPipe],
  declarations: [CatFactComponent],
  providers: [],
  exports: [CatFactComponent]
})
export class CatFactComponentModule {
}
