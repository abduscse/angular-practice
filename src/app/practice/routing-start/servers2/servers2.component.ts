import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServersService2 } from './servers2.service';

@Component({
  selector: 'app-servers2',
  templateUrl: './servers2.component.html',
  styleUrls: ['./servers2.component.css']
})
export class Servers2Component implements OnInit {
  private servers: { id: number, name: string, status: string }[] = [];

  constructor(
    private serversService2: ServersService2,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService2.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }

}
