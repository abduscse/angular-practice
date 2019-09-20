import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class User2Service {
    // activatedEvent = new EventEmitter<boolean>();
    activatedEvent = new Subject<boolean>();
}