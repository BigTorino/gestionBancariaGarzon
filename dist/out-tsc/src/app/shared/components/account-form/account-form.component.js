import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let AccountFormComponent = class AccountFormComponent {
    constructor(router, fb, accountsService) {
        var _a, _b;
        this.router = router;
        this.fb = fb;
        this.accountsService = accountsService;
        this.isEmail = /\S+@\S+\.\S+/;
        const navigation = this.router.getCurrentNavigation();
        this.account = (_b = (_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.value;
        this.initForm();
    }
    ngOnInit() {
        if (typeof this.account === 'undefined') {
            this.router.navigate(['new']);
        }
        else {
            this.accountForm.patchValue(this.account);
        }
    }
    onSave() {
        var _a;
        console.log('Saved', this.accountForm.value);
        if (this.accountForm.valid) {
            const account = this.accountForm.value;
            const accountId = ((_a = this.account) === null || _a === void 0 ? void 0 : _a.id) || null;
            this.accountsService.onSaveAccounts(account, accountId);
            this.accountForm.reset();
        }
    }
    onGoBackToList() {
        this.router.navigate(['list']);
    }
    isValidField(field) {
        const validatedField = this.accountForm.get(field);
        return !validatedField.valid && validatedField.touched
            ? 'is-invalid'
            : validatedField.touched
                ? 'is-valid'
                : '';
    }
    initForm() {
        this.accountForm = this.fb.group({
            username: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
            movil: ['', [Validators.required]],
            clave: ['', [Validators.required]],
        });
    }
};
AccountFormComponent = __decorate([
    Component({
        selector: 'app-account-form',
        templateUrl: './account-form.component.html',
        styleUrls: ['./account-form.component.scss'],
    })
], AccountFormComponent);
export { AccountFormComponent };
//# sourceMappingURL=account-form.component.js.map