import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountsListComponent } from './accounts-list.component';
const routes = [{ path: '', component: AccountsListComponent }];
let AccountsListRoutingModule = class AccountsListRoutingModule {
};
AccountsListRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AccountsListRoutingModule);
export { AccountsListRoutingModule };
//# sourceMappingURL=accounts-list-routing.module.js.map