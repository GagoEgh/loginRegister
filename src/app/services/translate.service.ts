import { Injectable } from '@angular/core';
import { EngService } from './eng.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private _transalate!: any

  constructor(
    private _EngService: EngService,
  ) {
    this._transalate = this._EngService.ENG
  }

  getTranslate() {
    return this._transalate
  }

  setTranslate(value: any) {
    this._transalate = value;
  }
}
