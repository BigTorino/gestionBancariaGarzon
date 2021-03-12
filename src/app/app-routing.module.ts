import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/accounts/accounts-list/accounts-list.module').then(
        (m) => m.AccountsListModule
      ),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./pages/accounts/new-account/new-account.module').then(
        (m) => m.NewAccountModule
      ),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./pages/accounts/account-details/account-details.module').then(
        (m) => m.AccountDetailsModule
      ),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./pages/accounts/edit-account/edit-account.module').then(
        (m) => m.EditAccountModule
      ),
  },
  {
    path: 'bitacora',
    loadChildren: () =>
      import('./pages/bitacoras/bitacoras-list/bitacora-list.module').then(
        (m) => m.BitacoraListModule
      ),
  },
  { 
    path: 'login', 
    loadChildren: () => 
      import('./pages/login/login.module').then(
        (m) => m.LoginModule
      ), 
  },
  {
    path: 'bitacora/edit',
    loadChildren: () =>
      import('./pages/bitacoras/edit-bitacora/edit-bitacora.module').then(
        (m) => m.EditBitacoraModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
