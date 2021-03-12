import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let AccountDetailsComponent = class AccountDetailsComponent {
    constructor(router, accountsService) {
        var _a, _b;
        this.router = router;
        this.accountsService = accountsService;
        this.account = null;
        this.navigationExtras = {
            state: {
                value: null
            }
        };
        const navigation = this.router.getCurrentNavigation();
        this.account = (_b = (_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.value;
    }
    ngOnInit() {
        if (typeof this.account === 'undefined') {
            this.router.navigate(['list']);
        }
    }
    goToEdit(item) {
        this.navigationExtras.state.value = item;
        this.router.navigate(['edit'], this.navigationExtras);
    }
    goToDelete() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.accountsService.onDeleteAccounts((_a = this.account) === null || _a === void 0 ? void 0 : _a.id);
                alert('Deleted');
                this.goBackToList();
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    goBackToList() {
        this.router.navigate(['list']);
    }
};
AccountDetailsComponent = __decorate([
    Component({
        selector: 'app-account-details',
        templateUrl: './account-details.component.html',
        styleUrls: ['./account-details.component.scss'],
    })
], AccountDetailsComponent);
export { AccountDetailsComponent };
//# sourceMappingURL=account-details.component.js.map