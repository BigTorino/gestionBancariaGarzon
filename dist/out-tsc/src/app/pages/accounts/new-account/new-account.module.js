import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAccountRoutingModule } from './new-account-routing.module';
import { NewAccountComponent } from './new-account.component';
import { AccountFormModule } from 'src/app/shared/components/account-form/account-form.module';
let NewAccountModule = class NewAccountModule {
};
NewAccountModule = __decorate([
    NgModule({
        declarations: [NewAccountComponent],
        imports: [
            CommonModule,
            NewAccountRoutingModule,
            AccountFormModule,
            BitacoraListModule
        ]
    })
], NewAccountModule);
export { NewAccountModule };
//# sourceMappingURL=new-account.module.js.map