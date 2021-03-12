import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BitacoraListRoutingModule } from './bitacora-list-routing.module';
import { BitacoraListComponent } from './bitacora-list.component';



@NgModule({
  declarations: [BitacoraListComponent],
  imports: [
    CommonModule,
    BitacoraListRoutingModule
  ]
})

export class BitacoraListModule { }

