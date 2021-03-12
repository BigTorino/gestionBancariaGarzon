import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let AccountsListComponent = class AccountsListComponent {
    constructor(router, accountsService) {
        this.router = router;
        this.accountsService = accountsService;
        this.accounts$ = this.accountsService.accounts;
        this.navigationExtras = {
            state: {
                value: null
            }
        };
    }
    ngOnInit() { }
    goToEdit(item) {
        this.navigationExtras.state.value = item;
        this.router.navigate(['edit'], this.navigationExtras);
    }
    goToSee(item) {
        this.navigationExtras.state.value = item;
        this.router.navigate(['details'], this.navigationExtras);
    }
    goToDelete(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.accountsService.onDeleteAccounts(item.id);
                alert('Deleted');
            }
            catch (err) {
                console.log(err);
            }
        });
    }
};
AccountsListComponent = __decorate([
    Component({
        selector: 'app-accounts-list',
        templateUrl: './accounts-list.component.html',
        styleUrls: ['./accounts-list.component.scss'],
    })
], AccountsListComponent);
export { AccountsListComponent };
//# sourceMappingURL=accounts-list.component.js.map