import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewAccountComponent } from './new-account.component';
const routes = [{ path: '', component: NewAccountComponent }];
let NewAccountRoutingModule = class NewAccountRoutingModule {
};
NewAccountRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], NewAccountRoutingModule);
export { NewAccountRoutingModule };
//# sourceMappingURL=new-account-routing.module.js.map