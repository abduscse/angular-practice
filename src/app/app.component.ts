import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3 {
    color: black;
  }
  `]
})
export class AppComponent {
  numbers: number[] = [];
  selection: string = 'recipes';

  onEmit(value: number) {
    this.numbers.push(value);
  }

  onSelection(selection: string) {
    this.selection = selection;
  }

}
