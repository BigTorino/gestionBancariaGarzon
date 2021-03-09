import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';
import { Account } from 'src/app/shared/models/account.interface';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {

  account: Account = null;

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  constructor(private router: Router, private accountsService: AccountsService) {
    const navigation = this.router.getCurrentNavigation();
    this.account = navigation?.extras?.state?.value;
   }


  ngOnInit(): void {
    if (typeof this.account === 'undefined') {
      this.router.navigate(['list']);
    }
  }

    public goToEdit(item){
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  async goToDelete(): Promise<void> {
    try {
      await this.accountsService.onDeleteAccounts(this.account?.id);
      alert('Deleted');
      this.goBackToList();
    } catch (err) {
      console.log(err);
    }
  }
  
  public goBackToList(): void {
    this.router.navigate(['list']);
  }

}
