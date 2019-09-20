import { Component, OnInit, OnDestroy } from '@angular/core';
import { User2Service } from './user2.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observables-start',
  templateUrl: './observables-start.component.html',
  styleUrls: ['./observables-start.component.css']
})
export class ObservablesStartComponent implements OnInit, OnDestroy {
  isActive = false;
  subscription: Subscription;

  constructor(private user2Service: User2Service) { }

  ngOnInit() {
    this.subscription = this.user2Service.activatedEvent.subscribe(
      boolean => {
        this.isActive = boolean;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
