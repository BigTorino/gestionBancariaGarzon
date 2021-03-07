import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'list', loadChildren: () => import('./pages/accounts/accounts-list/accounts-list.module').then(m => m.AccountsListModule) }, { path: 'new', loadChildren: () => import('./pages/accounts/new-account/new-account.module').then(m => m.NewAccountModule) }, { path: 'details', loadChildren: () => import('./pages/accounts/account-details/account-details.module').then(m => m.AccountDetailsModule) }, { path: 'edit', loadChildren: () => import('./pages/accounts/edit-account/edit-account.module').then(m => m.EditAccountModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
