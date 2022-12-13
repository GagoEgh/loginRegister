
import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appErrore]'
})
export class ErroreLengthDirective implements OnInit {

  @Input() value!: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  @Output() messaage: EventEmitter<string> = new EventEmitter<string>();

  span!: Element
  constructor(
    private elementRef: ElementRef,
    private rendrer2: Renderer2) { }

  ngOnInit(): void {
    this.onInput()
    this.span = this.createElem()

  }


  createElem() {
    let span = document.createElement('span');
    span.innerHTML = "min letter 3, max letter 10";
    span.classList.toggle("message")
    return span
  }

  changeValue = (event: Event) => {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);

    this.elementRef.nativeElement.after(this.span)
    if (this.value.length < 3 || this.value.length > 10) {
      this.rendrer2.addClass(this.elementRef.nativeElement, 'errore');
    } else {
      this.rendrer2.removeClass(this.elementRef.nativeElement, 'errore');
      this.span.remove()
    }
  }

  onInput() {
    this.elementRef.nativeElement.addEventListener("input", this.changeValue);
  }







}
