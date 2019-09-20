import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from './counter.service';

// {providedIn: 'root'} is new and optional syntax in angular 6+ for providing a service in app module. 
@Injectable({providedIn: 'root'})
export class UsersService {
    // activeUsers = new EventEmitter<string>();
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) {

    }

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.deActivations++;
        console.log('deActivations:' + this.counterService.deActivations);
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.activations++;
        console.log('activations:' + this.counterService.activations);
    }
}