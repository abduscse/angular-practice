import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class basicHighlightDirective {
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        // this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
    }
}