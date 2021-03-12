import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NewAccountComponent = class NewAccountComponent {
    // account: Account;
    // accountForm: FormGroup;
    // private isEmail = /\S+@\S+\.\S+/;
    constructor(router, fb, accountsService) {
        this.router = router;
        this.fb = fb;
        this.accountsService = accountsService;
        // this.initForm();
    }
    ngOnInit() {
        // if (typeof this.account === 'undefined') {
        //   this.router.navigate(['new']);
        // } else {
        //   this.accountForm.patchValue(this.account);
        // }
    }
};
NewAccountComponent = __decorate([
    Component({
        selector: 'app-new-account',
        templateUrl: './new-account.component.html',
        styleUrls: ['./new-account.component.scss'],
    })
], NewAccountComponent);
export { NewAccountComponent };
//# sourceMappingURL=new-account.component.js.map