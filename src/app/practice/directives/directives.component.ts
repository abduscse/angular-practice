import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  displayParagraph = false;
  counter = 0;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.displayParagraph = !this.displayParagraph;
    // this.logs.push(++this.counter);
    this.logs.push(new Date());
  }

}
