import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-start',
  templateUrl: './directives-start.component.html',
  styleUrls: ['./directives-start.component.css']
})
export class DirectivesStartComponent implements OnInit {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 10;
  constructor() { }

  ngOnInit() {
  }

}
