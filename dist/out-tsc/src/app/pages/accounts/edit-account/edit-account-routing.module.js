import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditAccountComponent } from './edit-account.component';
const routes = [{ path: '', component: EditAccountComponent }];
let EditAccountRoutingModule = class EditAccountRoutingModule {
};
EditAccountRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], EditAccountRoutingModule);
export { EditAccountRoutingModule };
//# sourceMappingURL=edit-account-routing.module.js.map