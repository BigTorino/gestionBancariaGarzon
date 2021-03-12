import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BitacorasService } from 'src/app/services/bitacoras.service';

@Component({
  selector: 'app-edit-bitacora',
  templateUrl: './edit-bitacora.component.html',
  styleUrls: ['./edit-bitacora.component.scss']
})
export class EditBitacoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
