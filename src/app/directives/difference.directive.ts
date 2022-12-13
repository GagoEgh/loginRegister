
import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDifference]'
})
export class DifferenceDirective implements OnInit {
  span!: Element


  @Input() password!: string;
  // @Output() passwordChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() rePassword!: string;
  @Output() rePasswordChange: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    private elementRef: ElementRef,
    private rendrer2: Renderer2
  ) { }

  ngOnInit(): void {

    this.span = this.createElem();


    this.onInput();

  }

  changeRepass(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.rePasswordChange.emit(value);
    if (this.password && this.rePassword) {
      if (this.password !== this.rePassword) {
        this.elementRef.nativeElement.after(this.span);
      } else {
        this.span.remove()
      }
    }
  }


  onInput() {
    this.elementRef.nativeElement.addEventListener("input", (event: Event) => {
      let value = (event.target as HTMLInputElement).value;
      this.rePasswordChange.emit(value);
      if (this.password && this.rePassword) {
        if (this.password !== this.rePassword) {
          // console.log('re', this.rePassword);
          // console.log('val', value)
          // console.log('pass', this.password);
          this.elementRef.nativeElement.after(this.span);
        } else {
          this.span.remove()
        }
      }
    });
  }

  createElem() {
    let span = document.createElement('span');
    span.innerHTML = "wrong password";
    span.classList.toggle("message");
    return span
  }
}
