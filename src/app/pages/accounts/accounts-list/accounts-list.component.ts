import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent implements OnInit {
  items = [0, 1, 2, 3, 4];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public goToEdit(item){
    this.router.navigate(['edit']);
  }
  public goToSee(item){
    this.router.navigate(['details']);
  }
  public goToDelete(item){
    alert('Deleted');
  } 
}
