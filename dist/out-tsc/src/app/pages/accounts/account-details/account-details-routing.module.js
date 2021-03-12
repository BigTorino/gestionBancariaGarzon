import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './account-details.component';
const routes = [
    { path: '', component: AccountDetailsComponent },
    {
        path: ':id',
        component: AccountDetailsComponent,
    },
];
let AccountDetailsRoutingModule = class AccountDetailsRoutingModule {
};
AccountDetailsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AccountDetailsRoutingModule);
export { AccountDetailsRoutingModule };
//# sourceMappingURL=account-details-routing.module.js.map