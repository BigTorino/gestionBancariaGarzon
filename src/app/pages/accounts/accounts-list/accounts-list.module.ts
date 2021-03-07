import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsListRoutingModule } from './accounts-list-routing.module';
import { AccountsListComponent } from './accounts-list.component';


@NgModule({
  declarations: [AccountsListComponent],
  imports: [
    CommonModule,
    AccountsListRoutingModule
  ]
})
export class AccountsListModule { }
