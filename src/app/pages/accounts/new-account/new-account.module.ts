import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAccountRoutingModule } from './new-account-routing.module';
import { NewAccountComponent } from './new-account.component';


@NgModule({
  declarations: [NewAccountComponent],
  imports: [
    CommonModule,
    NewAccountRoutingModule
  ]
})
export class NewAccountModule { }
