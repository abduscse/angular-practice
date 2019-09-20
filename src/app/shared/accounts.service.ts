import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
@Injectable()
export class AccountsService {
    constructor(private loggingService: LoggingService) {

    }
    accountStatus = new EventEmitter<string>();
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    onAccountAdded(name, status) {
        this.accounts.push({ name: name, status: status });
        this.loggingService.logStatusChange(status);
    }

    onStatusChanged(id, status) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }

}