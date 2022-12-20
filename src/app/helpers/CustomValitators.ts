import { AbstractControl, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    public static reqiredControl(control: FormControl): ValidationErrors | null {
        if (control.value.trim().length === 0) {
            return {
                reqiredControl: true
            }
        }
        return null
    }


    public static differencePassword(group: AbstractControl): ValidationErrors | null {
        const password = group.get('password')?.value;
        const rePassword = group.get('rePassword')?.value;
        if (password && rePassword) {
            if (password !== rePassword) {
                return {
                    difference: true
                }
            }
        }
        return null
    }


}