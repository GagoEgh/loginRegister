import { Directive, DoCheck, ElementRef, Input,  Renderer2 } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Directive({
  selector: '[appTouched]'
})
export class TouchedDirective implements  DoCheck{

  @Input()controlName!:AbstractControl<FormControl>|null;
 

  constructor(
    private _elementRef:ElementRef,
    private _renderer2:Renderer2
  ) { }

  ngDoCheck(): void {
    this.emptyForm()
  }


  emptyForm(){
    if(this.controlName?.touched && this.controlName?.invalid){
      this._renderer2.addClass(this._elementRef.nativeElement,'errore')
    }else{
      this._renderer2.removeClass(this._elementRef.nativeElement,'errore')
    }
  }
}
