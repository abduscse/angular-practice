import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-start',
  templateUrl: './pipes-start.component.html',
  styleUrls: ['./pipes-start.component.css']
})
export class PipesStartComponent implements OnInit {
  appStatus = new Promise((resolve, reject) => {
    setInterval(() => {
      resolve('stable');
    }, 2000);
  });

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  filtredStatus = '';
  constructor() { }

  ngOnInit() {
  }
  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'Another Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }

}
