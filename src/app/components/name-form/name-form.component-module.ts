import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NameFormComponent } from './name-form.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, RouterLink],
  declarations: [NameFormComponent],
  providers: [],
  exports: [NameFormComponent]
})
export class NameFormComponentModule {
}
