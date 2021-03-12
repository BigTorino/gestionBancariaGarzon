import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailsRoutingModule } from './account-details-routing.module';
import { AccountDetailsComponent } from './account-details.component';
let AccountDetailsModule = class AccountDetailsModule {
};
AccountDetailsModule = __decorate([
    NgModule({
        declarations: [AccountDetailsComponent],
        imports: [
            CommonModule,
            AccountDetailsRoutingModule
        ]
    })
], AccountDetailsModule);
export { AccountDetailsModule };
//# sourceMappingURL=account-details.module.js.map