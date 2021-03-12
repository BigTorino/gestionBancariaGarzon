import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBitacoraComponent } from './edit-bitacora.component';

const routes: Routes = [{ path: '', component: EditBitacoraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditBitacoraRoutingModule { }
