import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AgeComponent } from './age.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, NgIf, AsyncPipe],
  declarations: [AgeComponent],
  providers: [],
  exports: [AgeComponent]
})
export class AgeComponentModule {
}
