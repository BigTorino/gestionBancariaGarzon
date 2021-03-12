import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BitacorasService } from 'src/app/services/bitacoras.service';
import { Bitacora } from '../../../shared/models/bitacora.interface';

@Component({
  selector: 'app-bitacora-list',
  templateUrl: './bitacora-list.component.html',
  styleUrls: ['./bitacora-list.component.scss']
})

export class BitacoraListComponent implements OnInit {
  bitacoras$ = this.bitacorasService.bitacoras;
  navigationExtras: NavigationExtras = {
    state: {   value: null }
};

constructor(private router: Router, private bitacorasService: BitacorasService) {
}

ngOnInit(): void {
}

public goToEdit(bitacora)  {
    this.navigationExtras.state.value = bitacora;
    this.router.navigate(['bitacora/edit'], this.navigationExtras);
}

async goToDelete(bitacora: Bitacora): Promise<void> {
    try {
      await this.bitacorasService.onDeleteBitacoras(bitacora);
    } catch (err) {
      console.log(err);
    }
}

}
