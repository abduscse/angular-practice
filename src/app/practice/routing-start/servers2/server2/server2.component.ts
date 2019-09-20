import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServersService2 } from '../servers2.service';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit, OnDestroy {
  server: { id: number, name: string, status: string };
  id: number;
  paramsSubscription: Subscription;
  resolveSubscription: Subscription;

  constructor(
    private serversService2: ServersService2,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.resolveSubscription = this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    // this.id = +this.route.snapshot.params['id'];
    // this.server = this.serversService2.getServer(this.id);

    // this.paramsSubscription = this.route.params.subscribe(
    //   (params: Params) => {
    //     this.id = +params['id'];
    //     this.server = this.serversService2.getServer(this.id);
    //   }
    // );
  }

  loadServer2() {
    this.router.navigate(['/servers', 2]);
  }

  ngOnDestroy() {
    this.resolveSubscription.unsubscribe();
    // this.paramsSubscription.unsubscribe();
  }

  onEdit() {
    // this.router.navigate(['/servers', this.server.id, 'edit']);
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      //  queryParamsHandling: 'merge' // use merge to merge any new queryparams being added from here.
      queryParamsHandling: 'preserve'
    });
  }

}
