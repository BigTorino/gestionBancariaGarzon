import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BitacorasService } from 'src/app/services/bitacoras.service';

@Component({
  selector: 'app-bitacora-list',
  templateUrl: './bitacora-list.component.html',
  styleUrls: ['./bitacora-list.component.scss']
})
export class BitacoraListComponent implements OnInit {

  bitacora_ = this.bitacorasService.bitacoras;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router, private bitacorasService: BitacorasService) {}


  ngOnInit(): void {
  }

}
