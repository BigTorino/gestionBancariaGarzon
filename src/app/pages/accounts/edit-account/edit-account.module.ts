import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAccountRoutingModule } from './edit-account-routing.module';
import { EditAccountComponent } from './edit-account.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditAccountComponent],
  imports: [
    CommonModule,
    EditAccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditAccountModule { }
