import { Injectable } from '@angular/core';
import { Bitacora } from '../shared/models/bitacora.interface';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class BitacorasService {

  bitacoras: Observable<Bitacora[]>;

  private bitacorasCollection: AngularFirestoreCollection<Bitacora>;

  constructor(private readonly afs: AngularFirestore) {
    this.bitacorasCollection = afs.collection<Bitacora>('bitacoras');
    this.getBitacoras();
  }

  onDeleteBitacoras(bitacora: Bitacora): Promise<void> {
    return new Promise(async (resolve, reject) => { 
      try {
        console.log("viene fe_Ins : "+ bitacora.fe_Ins);
        const result = await this.bitacorasCollection.doc(bitacora.id).delete();
        resolve(result);
        console.log("result", result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  onSaveBitacoras(bitacora: Bitacora): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = bitacora.id || this.afs.createId();
        bitacora.id = id;
        const data = { id, ...bitacora };
        
        const result = await this.bitacorasCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }


  private getBitacoras(): void {
    this.bitacoras = this.bitacorasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Bitacora))
    );
  }
  
}
