import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";





export function BirhdateValidator(): ValidatorFn {
    var validationFunction = (
      control: AbstractControl
    ): ValidationErrors | null => {
      let birthdateYear = new Date(control.value).getTime();
      let today = new Date().getTime();
      let differenceMs = today - birthdateYear;
      let yearRule = birthdateYear <= today;
      const isValid = yearRule;
      return isValid ? null : { birthdateFormat: true };
    };
  
    return validationFunction;
  }