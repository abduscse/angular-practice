import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { ServersService2 } from '../servers2.service';
import { CanComponentDeactivate } from '../../../../can-deactivate-gaurd.service';

@Component({
  selector: 'app-edit-server2',
  templateUrl: './edit-server2.component.html',
  styleUrls: ['./edit-server2.component.css']
})
export class EditServer2Component implements OnInit, OnDestroy, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  queryParamsSubscription: Subscription;
  fragmentSubscription: Subscription;
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService2: ServersService2,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);

    // if you we to refresh query params or fragment getting passed  from the same page.
    // then need to subscribe activatedRoute.queryParams or activatedRoute.fragment respectively.
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (queryParams) => {
        this.allowEdit = queryParams.allowEdit === '1' ? true : false;
      }
    );

    this.fragmentSubscription = this.route.fragment.subscribe(
      (fragment: string) => {
        // console.log(fragment);
      }
    );
    this.server = this.serversService2.getServer(+this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService2.getServer(+this.route.snapshot.params['id']);
      }
    );
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService2.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onReload() {
    this.router.navigate(
      ['/servers', 25, 'edit'],
      {
        queryParams: { allowEdit: 0, allowNew: true },
        fragment: 'unload'
      }
    );
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
    this.fragmentSubscription.unsubscribe();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.allowEdit) {
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Discard Changes?');
    } else {
      return true;
    }
  }

}
