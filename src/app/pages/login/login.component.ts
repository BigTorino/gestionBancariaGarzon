import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';
import { Account } from 'src/app/shared/models/account.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  account: Account = null;

  constructor(private router: Router, private accountsService: AccountsService) {

  }

  ngOnInit(): void {
  }

}
