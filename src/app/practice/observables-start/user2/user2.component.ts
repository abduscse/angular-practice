import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User2Service } from '../user2.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit, OnDestroy {
  id: number;
  subscription : Subscription;

  constructor(private route: ActivatedRoute, private user2Service: User2Service) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate() {
    // this.user2Service.activatedEvent.emit(true);
    this.user2Service.activatedEvent.next(true);
  }

  ngOnDestroy(){

  }
}
