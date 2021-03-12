import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BitacoraListComponent = class BitacoraListComponent {
    constructor(router, bitacorasService) {
        this.router = router;
        this.bitacorasService = bitacorasService;
        this.bitacora_ = this.bitacorasService.bitacoras;
        this.navigationExtras = {
            state: {
                value: null
            }
        };
    }
    ngOnInit() {
    }
};
BitacoraListComponent = __decorate([
    Component({
        selector: 'app-bitacora-list',
        templateUrl: './bitacora-list.component.html',
        styleUrls: ['./bitacora-list.component.scss']
    })
], BitacoraListComponent);
export { BitacoraListComponent };
//# sourceMappingURL=bitacora-list.component.js.map