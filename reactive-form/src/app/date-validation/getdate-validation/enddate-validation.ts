import { AbstractControl, ValidationErrors } from "@angular/forms";


export function dateValidation(control: AbstractControl): ValidationErrors | null {
    const startDate = new Date(control.parent?.value.startDate);
    const endDate = new Date(control.value);

    if (endDate < startDate) {
        return { properValue: true };
    }
    return null;
}