import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BitacoraListComponent } from './bitacora-list.component';
const routes = [{ path: '', component: BitacoraListComponent }];
let BitacoraListRoutingModule = class BitacoraListRoutingModule {
};
BitacoraListRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], BitacoraListRoutingModule);
export { BitacoraListRoutingModule };
//# sourceMappingURL=bitacora-list-routing.module.js.map