import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let BitacorasService = class BitacorasService {
    constructor(afs) {
        this.afs = afs;
        this.bitacorasCollection = afs.collection('bitacoras');
        this.getBitacoras();
    }
    onDeleteBitacoras(id_bitacora) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.bitacorasCollection.doc(id_bitacora).delete();
                resolve(result);
            }
            catch (err) {
                reject(err.message);
            }
        }));
    }
    onSaveBitacoras(bitacora, id_bitacora) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = id_bitacora || this.afs.createId();
                const data = Object.assign({ id }, bitacora);
                const result = yield this.bitacorasCollection.doc(id).set(data);
                resolve(result);
            }
            catch (err) {
                reject(err.message);
            }
        }));
    }
    getBitacoras() {
        this.bitacoras = this.bitacorasCollection.snapshotChanges().pipe(map(actions => actions.map(a => a.payload.doc.data())));
    }
};
BitacorasService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BitacorasService);
export { BitacorasService };
//# sourceMappingURL=bitacoras.service.js.map