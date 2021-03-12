import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path: 'list',
        loadChildren: () => import('./pages/accounts/accounts-list/accounts-list.module').then((m) => m.AccountsListModule),
    },
    {
        path: 'new',
        loadChildren: () => import('./pages/accounts/new-account/new-account.module').then((m) => m.NewAccountModule),
    },
    {
        path: 'details',
        loadChildren: () => import('./pages/accounts/account-details/account-details.module').then((m) => m.AccountDetailsModule),
    },
    {
        path: 'edit',
        loadChildren: () => import('./pages/accounts/edit-account/edit-account.module').then((m) => m.EditAccountModule),
    },
    {
        path: 'bitacora',
        loadChildren: () => import('./pages/bitacoras/bitacoras-list/bitacora-list.module').then((m) => m.BitacoraListModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map