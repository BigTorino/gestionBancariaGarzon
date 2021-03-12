import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountFormComponent } from './account-form.component';
let AccountFormModule = class AccountFormModule {
};
AccountFormModule = __decorate([
    NgModule({
        declarations: [AccountFormComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule
        ],
        exports: [AccountFormComponent]
    })
], AccountFormModule);
export { AccountFormModule };
//# sourceMappingURL=account-form.module.js.map