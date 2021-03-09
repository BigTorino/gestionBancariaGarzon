import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAccountRoutingModule } from './edit-account-routing.module';
import { EditAccountComponent } from './edit-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountFormModule } from 'src/app/shared/components/account-form/account-form.module';


@NgModule({
  declarations: [EditAccountComponent],
  imports: [
    CommonModule,
    EditAccountRoutingModule,
    ReactiveFormsModule,
    AccountFormModule
  ]
})
export class EditAccountModule { }
