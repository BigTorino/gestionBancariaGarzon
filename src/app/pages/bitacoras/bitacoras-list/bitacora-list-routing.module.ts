
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitacoraListComponent } from './bitacora-list.component';

const routes: Routes = [{ path: '', component: BitacoraListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BitacoraListRoutingModule { }
