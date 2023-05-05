import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberValidation]',
})
export class NumberValidationDirective {

  regex:RegExp = new RegExp('^[0-9]*$');

  constructor(private el: ElementRef) { }

  @HostListener('keypress', ['$event'])onKeyPress(event: KeyboardEvent) {

    const inputValue = this.el.nativeElement.value.concat(event.key);
    console.log(event.key);
    if (inputValue && !inputValue.match(this.regex)) {
      event.preventDefault();
    }
    return ;
  }

}
