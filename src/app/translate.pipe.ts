import { Pipe, PipeTransform } from "@angular/core";
import { ArmService } from "./services/arm.service";
import { EngService } from "./services/eng.service";
import { TranslateService } from "./services/translate.service";


@Pipe({
    name: 'translate',
    pure: false
})
export class TranslatePipe implements PipeTransform {
    constructor(
        private _ArmService: ArmService,
        private _EngService: EngService,
        private _TranslateService: TranslateService
    ) { }

    transform(value: string) {
        let language = this._TranslateService.getTranslate();
        let keys = value.split('.');
        let str!:string
        for (let i = 0; i < keys.length; i++) {
            if (keys[i + 1] !== undefined) {
                str = language[keys[i]][keys[i + 1]]
            }
        }
        return str
    }
}