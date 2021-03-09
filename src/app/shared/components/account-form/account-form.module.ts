import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountFormComponent } from './account-form.component';



@NgModule({
  declarations: [AccountFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AccountFormComponent]
})
export class AccountFormModule { }
