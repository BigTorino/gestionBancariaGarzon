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

  onDeleteBitacoras(id_bitacora: string): Promise<void> {
    return new Promise(async (resolve, reject) => { 
      try {
        const result = await this.bitacorasCollection.doc(id_bitacora).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  onSaveBitacoras(bitacora: Bitacora, id_bitacora: string ): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = id_bitacora || this.afs.createId();
        console.log ("codigo de bitacora  = "+ id);
        bitacora.id = id;
        const data = { id, ...bitacora };
        const result = await this.bitacorasCollection.doc(id).set(data);
        resolve(result);
        console.log ("resultado  = "+ result);
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
