import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-success-alert]',
  template: `<p>Success!!!</p>`,
  styles: [`p {
    padding: 20px;
    background-color: palegreen;
    border: 2px solid green;
}`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
