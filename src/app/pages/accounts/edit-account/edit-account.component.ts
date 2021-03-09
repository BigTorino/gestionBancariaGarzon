import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss'],
})
export class EditAccountComponent implements OnInit {
  value = null;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private accountsService: AccountsService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
    this.initForm();
  }

  account: Account;
  accountForm: FormGroup;

  private isEmail = /\S+@\S+\.\S+/;


  ngOnInit(): void {
    // if (typeof this.account === 'undefined') {
    //   this.router.navigate(['new']);
    // } else {
    //   this.accountForm.patchValue(this.account);
    // }
  }

  onSave(): void {
    console.log('Saved', this.accountForm.value);
    if (this.accountForm.valid) {
      const account = this.accountForm.value;
      const accountId = this.account?.id || null;
      this.accountsService.onSaveAccounts(account, accountId);
      this.accountForm.reset();
    }
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }

  isValidField(field: string): string {
    const validatedField = this.accountForm.get(field);
    return !validatedField.valid && validatedField.touched
      ? 'is-invalid'
      : validatedField.touched
      ? 'is-valid'
      : '';
  }

  private initForm(): void {
    this.accountForm = this.fb.group({
      username: [this.value.username, [Validators.required]],
      email: [this.value.email, [Validators.required, Validators.pattern(this.isEmail)]],
      movil: [this.value.movil, [Validators.required]],
      clave: [this.value.clave, [Validators.required]],
    });
  }
}
