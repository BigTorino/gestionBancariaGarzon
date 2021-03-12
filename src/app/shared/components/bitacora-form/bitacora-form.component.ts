import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BitacorasService } from 'src/app/services/bitacoras.service';
import { AccountsService } from 'src/app/services/accounts.service';

import { Bitacora } from '../../models/bitacora.interface';

import { Account } from '../../models/account.interface';

@Component({
  selector: 'app-bitacora-form',
  templateUrl: './bitacora-form.component.html',
  styleUrls: ['./bitacora-form.component.scss']
})


export class BitacoraFormComponent implements OnInit {

  bitacora: Bitacora;
  bitacoraForm: FormGroup;
  

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private bitacoraService: BitacorasService
    
  ) {       const navigation = this.router.getCurrentNavigation();
            this.bitacora    = navigation?.extras?.state?.value;
            this.initForm();
    }

  ngOnInit(): void {
    if (typeof this.bitacora === 'undefined') {
      // this.router.navigate(['new']);  -------------------> Trabajando bitacora
    } else {
      this.bitacoraForm.patchValue(this.bitacora);
    }
  }

  onGoBackToList(){
  }

  onSave(): void {
    console.log('Saved bitacora', this.bitacoraForm.value);

    if (this.bitacoraForm.valid) {
      const bitacora   = this.bitacoraForm.value;
      const bitacoraId = this.bitacora?.id || null;

      this.bitacoraService.onSaveBitacoras(bitacora);
      this.bitacoraForm.reset();
    } else {
      console.log ("fallo");
    }
  }

    isValidField(field: string): string {
    const validatedField = this.bitacoraForm.get(field);
    return !validatedField.valid && validatedField.touched
      ? 'is-invalid'
      : validatedField.touched
      ? 'is-valid'
      : '';
  }

    private initForm(): void {
    this.bitacoraForm = this.fb.group({
      id: [''],
      co_bitacora_previa: ['', [Validators.required]],
      co_Account: ['', [Validators.required]],
      fe_Ins: ['', [Validators.required]],
    });
  }

}
