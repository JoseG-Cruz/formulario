import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera( control: FormControl ): {[s:string]: boolean}{

  if(control.value?.toLowerCase() === "herrera"){
    return{
      noHerrera: true
    }

  }
  return null;

  } 

  passwordsIguales(pass1Name: string, pass2Name: string){
    return (formGroup: FormGroup)=>{
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if ( pass1Control.value === pass2Control.value){
        pass2Control.setErrors(null);
      }else{
        pass2Control.setErrors({noEsIgual: true});
      }

    }
  }


}
