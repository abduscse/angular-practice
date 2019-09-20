import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer;
  counter = 1;
  @Output() sendNumbers = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  startGame() {
    this.timer = setInterval(() => {
      this.sendNumbers.emit(this.counter);
      this.counter++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.timer);
  }


}
