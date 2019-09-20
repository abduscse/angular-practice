import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-databinding',
  templateUrl: './cmp-databinding.component.html',
  styleUrls: ['./cmp-databinding.component.css']
})
export class CmpDatabindingComponent implements OnInit {
  serverElements = [{ name: 'Test server', type: 'server', content: 'just a test!' }];

  constructor() { }

  ngOnInit() {
  }

  onServerCreation(serverData) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintCreation(blueprintData) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  changeFirstElement() {
    this.serverElements[0].name = 'name changed...'
  }

  destroyFirstElement() {
    this.serverElements.splice(0, 1);
  }


}
