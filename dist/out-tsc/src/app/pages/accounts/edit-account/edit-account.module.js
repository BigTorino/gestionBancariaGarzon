import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAccountRoutingModule } from './edit-account-routing.module';
import { EditAccountComponent } from './edit-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountFormModule } from 'src/app/shared/components/account-form/account-form.module';
let EditAccountModule = class EditAccountModule {
};
EditAccountModule = __decorate([
    NgModule({
        declarations: [EditAccountComponent],
        imports: [
            CommonModule,
            EditAccountRoutingModule,
            ReactiveFormsModule,
            AccountFormModule
        ]
    })
], EditAccountModule);
export { EditAccountModule };
//# sourceMappingURL=edit-account.module.js.map