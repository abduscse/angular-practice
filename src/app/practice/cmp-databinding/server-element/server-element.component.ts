import {
  Component, OnInit, Input, ViewEncapsulation, SimpleChanges, ViewChild, ElementRef, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated(default), None, Native(Showdow DOM technology) 
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy,
  AfterViewInit, AfterViewChecked {
  @Input('srvElement') element: {
    name: string,
    type: string,
    content: string
  };
  @Input() name: string;

  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor is called..');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges is called..');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit is called..');
    console.log('header:' + this.header.nativeElement.textContent);
    console.log('Content Pragraph' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck is called..');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit is called..');
    console.log('Content Pragraph' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked is called..');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit is called..');
    console.log('header:' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked is called..');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy is called..');
  }

}
