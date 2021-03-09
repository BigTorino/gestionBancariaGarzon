import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details.component';

const routes: Routes = [
  { path: '', component: AccountDetailsComponent },
  {
    path: ':id',
    component: AccountDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountDetailsRoutingModule {}
