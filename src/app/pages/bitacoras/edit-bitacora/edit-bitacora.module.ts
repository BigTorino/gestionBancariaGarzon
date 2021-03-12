import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBitacoraRoutingModule } from './edit-bitacora-routing.module';
import { EditBitacoraComponent } from './edit-bitacora.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BitacoraFormModule } from 'src/app/shared/components/bitacora-form/bitacora-form.module';


@NgModule({
  declarations: [EditBitacoraComponent],
  imports: [
    CommonModule,
    EditBitacoraRoutingModule,
    ReactiveFormsModule,
    BitacoraFormModule
  ]
})
export class EditBitacoraModule { }
