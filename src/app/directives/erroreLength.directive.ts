
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

  constructor(
    private elementRef: ElementRef,
    private rendrer2: Renderer2) { }

  ngOnInit(): void {
    this.onInput();
  }
  changeValue = (event: Event) => {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
    if (this.value.length < 3 || this.value.length > 10) {
      this.rendrer2.addClass(this.elementRef.nativeElement, 'errore');
    } else {
      this.rendrer2.removeClass(this.elementRef.nativeElement, 'errore');
    }
  }

  onInput() {
    this.elementRef.nativeElement.addEventListener("input", this.changeValue);
  }
}
