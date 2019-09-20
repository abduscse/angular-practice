import { Component, OnInit, DoCheck } from '@angular/core';
import { AccountsService } from '../shared/accounts.service'

@Component({
  selector: 'app-services-start',
  templateUrl: './services-start.component.html',
  styleUrls: ['./services-start.component.css'],
  // providers: [AccountsService]
})
export class ServicesStartComponent implements OnInit, DoCheck {
  accounts: { name: string, status: string }[];

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  ngDoCheck() {
    this.accounts = this.accountsService.accounts;
  }

}
