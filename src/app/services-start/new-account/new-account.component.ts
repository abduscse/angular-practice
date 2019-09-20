import { Component } from '@angular/core';
// import { LoggingService } from '../../shared/logging.service';
import { AccountsService } from '../../shared/accounts.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(
    // private loggingService: LoggingService, 
    private accountsService: AccountsService) {
    this.accountsService.accountStatus.subscribe((status: string) => {
      console.log('Status: ' + status)
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAccountAdded(accountName, accountStatus);

    // services must never be instantiated....
    // let service = new LoggingService();
    // service.logStatusChange(accountStatus);

    // this.loggingService.logStatusChange(accountStatus);


  }
}
