import { Component } from '@angular/core';
import { Validators, FormBuilder, EmailValidator } from '@angular/forms';
import { BirhdateValidator } from '../../validations/birthdateValidator';
import { Visitor } from 'src/app/models/visitor';
import { VisitorServiceService } from 'src/app/admin/visitor-admin/visitor-service.service';
import { emailValidator } from 'src/app/validations/emailvalidator';

@Component({
  selector: 'app-visitor-page',
  templateUrl: './visitor-page.component.html',
  styleUrls: ['./visitor-page.component.css']
})
export class VisitorPageComponent {
  newVisitor:Visitor | undefined = undefined;
  visitorList:any[] = [];
  visibilityAlertReject: boolean = false;
  visibilityAlertConfirm: boolean = false;
  constructor(private formBuilder:FormBuilder,public visitorService:VisitorServiceService)
  {}
  public visitorForm = this.formBuilder.group({
    name: ['',[Validators.required], Validators.minLength(3)],
    email: ['',[Validators.required,emailValidator()]],
    content: ['',[Validators.required,Validators.minLength(50)]],
    birthDate: ['', [Validators.required,BirhdateValidator()]],
    publishDateExpire: [''],
    reviewType:['',[Validators.required]],
    isConfirmed: [false]
  })

  isInvalid(controlName:string) : boolean{

    let control=this.visitorForm.get(controlName)!;
  
    if(!(control.invalid && (control.dirty|| control.touched))) return false;
  
    if(control.errors?.['required']) return true;
    if(control.errors?.['minlength']) return true;
    if(control.errors?.['maxlength']) return true;
    if(control.errors?.['max']) return true;
    if(control.errors?.['min']) return true;
    if(control.errors?.['pattern']) return true;
    if(control.errors?.['birthdateFormat']) return true;
    if(control.errors?.['emailFormat']) return true;
   

  
    
  
    return false;
  
  }
  
  isValid(controlName:string){
    let control =this.visitorForm.get(controlName)!;
    return control.valid && (control.dirty || control.touched);
  }
  
  getControl(controlName:string){
  
    return this.visitorForm.get(controlName)!;
  }
  
  isInvalidControl(controlName:string,
    validationName:string){
  
      return this.getControl(controlName).errors?.
      [validationName];
  
  }
  closeAlert() {
    this.visibilityAlertReject = false;
    this.visibilityAlertConfirm = false;
  }
 
  save(){
   if(this.visitorForm.invalid){
     this.visibilityAlertReject = true;
     return;
   }
   this.visibilityAlertConfirm = true;
   this.visitorForm.controls['isConfirmed'].setValue(false);
   this.newVisitor = this.visitorForm.value as unknown as Visitor;
   this.visitorService.addVisitor(this.newVisitor);
   console.log(this.visitorService.visitors);
   this.visitorService.resetForm(this.visitorForm);
  }

}

