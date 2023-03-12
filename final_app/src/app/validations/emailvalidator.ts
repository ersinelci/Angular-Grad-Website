import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
    Validators,
  } from '@angular/forms';


  export function emailValidator(): ValidatorFn {
    var validationFunction = (
      control: AbstractControl
    ): ValidationErrors | null => {
      const value = control.value;
  
      if (!value) return null;
  
      
      const hasFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
      
     
  
      const isValid = hasFormat;
  
      return isValid ? null : { emailFormat: true };
    };
  
    return validationFunction;
  }