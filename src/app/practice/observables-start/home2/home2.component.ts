import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit, OnDestroy {
  firstObservale: Subscription


  ngOnInit() {
    // this.firstObservale = interval(1000).subscribe(count => { 
    //   console.log(count); 
    // });

    const CustomCountObservable = Observable.create(
      observer => {
        let count = 0;
        setInterval(() => {
          observer.next(count++);
          if (count === 4) {
            observer.complete();
          }
          if (count > 5) {
            const error = { message: 'count is greater than 3!' };
            observer.error(error);
          }
        }, 1000);
      }
    );

    this.firstObservale = CustomCountObservable.pipe(
      filter(
        (data: number) => {
          return data > 0;
        }),
      map((data: number) => {
        return 'Round: ' + (data + 1);
      })
    ).subscribe(
      (count) => {
        console.log(count);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log('Completed..');
      }
      );
  }

  ngOnDestroy() {
    this.firstObservale.unsubscribe();
  }


}
