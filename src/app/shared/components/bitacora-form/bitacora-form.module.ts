import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BitacoraFormComponent } from './bitacora-form.component';


@NgModule({
  declarations: [BitacoraFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[BitacoraFormComponent]
})
export class BitacoraFormModule { }
