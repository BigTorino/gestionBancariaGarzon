import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent implements OnInit {
  accounts$ = this.accountsService.accounts;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  constructor(private router: Router, private accountsService: AccountsService) {}

  ngOnInit(): void {}

  public goToEdit(item){
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  public goToSee(item){
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }
  async goToDelete(item: Account): Promise<void> {
    try {
      await this.accountsService.onDeleteAccounts(item.id);
      alert('Deleted');
    } catch (err) {
      console.log(err);
    }
  }
}
