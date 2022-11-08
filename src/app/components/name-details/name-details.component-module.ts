import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { NameDetailsComponent } from './name-details.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [MatButtonToggleModule, MatCardModule, CommonModule, RouterLink],
  declarations: [NameDetailsComponent],
  providers: [],
  exports: [NameDetailsComponent]
})
export class NameDetailsComponentModule {
}
