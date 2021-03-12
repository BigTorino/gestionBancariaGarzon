import { Component, OnInit, Input } from '@angular/core';
import { AccountsService } from '../../../services/accounts.service';

@Component({
  selector: 'app-new-bitacoras',
  templateUrl: './new-bitacoras.component.html',
  styleUrls: ['./new-bitacoras.component.scss']
})
export class NewBitacorasComponent implements OnInit {

  constructor(public accountService: AccountsService) { 
  }

  ngOnInit(): void {
  }
}
