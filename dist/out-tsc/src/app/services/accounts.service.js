import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let AccountsService = class AccountsService {
    constructor(afs) {
        this.afs = afs;
        this.accountsCollection = afs.collection('accounts');
        this.getAccounts();
    }
    onDeleteAccounts(empId) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.accountsCollection.doc(empId).delete();
                resolve(result);
            }
            catch (err) {
                reject(err.message);
            }
        }));
    }
    onSaveAccounts(employee, empId) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = empId || this.afs.createId();
                const data = Object.assign({ id }, employee);
                const result = yield this.accountsCollection.doc(id).set(data);
                resolve(result);
            }
            catch (err) {
                reject(err.message);
            }
        }));
    }
    getAccounts() {
        this.accounts = this.accountsCollection.snapshotChanges().pipe(map(actions => actions.map(a => a.payload.doc.data())));
    }
};
AccountsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AccountsService);
export { AccountsService };
//# sourceMappingURL=accounts.service.js.map