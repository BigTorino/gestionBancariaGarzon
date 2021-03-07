import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAccountRoutingModule } from './edit-account-routing.module';
import { EditAccountComponent } from './edit-account.component';


@NgModule({
  declarations: [EditAccountComponent],
  imports: [
    CommonModule,
    EditAccountRoutingModule
  ]
})
export class EditAccountModule { }
