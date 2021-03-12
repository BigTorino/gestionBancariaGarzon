import { Injectable } from '@angular/core';
import { Account } from '../shared/models/account.interface';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'

import { BitacorasService } from 'src/app/services/bitacoras.service';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  accounts: Observable<Account[]>;

  private accountsCollection: AngularFirestoreCollection<Account>;

  constructor(private readonly afs: AngularFirestore,  private bitacoraService: BitacorasService) {
    this.accountsCollection = afs.collection<Account>('accounts');
    this.getAccounts();
  }

  onDeleteAccounts(empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => { 
      try {
        const result = await this.accountsCollection.doc(empId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  onSaveAccounts(employee: Account, empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = empId || this.afs.createId();
        const data = { id, ...employee };

        const cadena = { 'id': '', 'co_bitacora_previa': 'xxxxxxxx' , 'co_Account': id, 'fe_Ins':'01/01/01'};
        this.bitacoraService.onSaveBitacoras(cadena);
        const result = await this.accountsCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }


  private getAccounts(): void {
    this.accounts = this.accountsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Account))
    );
  }
  

}
