import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsListRoutingModule } from './accounts-list-routing.module';
import { AccountsListComponent } from './accounts-list.component';
let AccountsListModule = class AccountsListModule {
};
AccountsListModule = __decorate([
    NgModule({
        declarations: [AccountsListComponent],
        imports: [
            CommonModule,
            AccountsListRoutingModule
        ]
    })
], AccountsListModule);
export { AccountsListModule };
//# sourceMappingURL=accounts-list.module.js.map