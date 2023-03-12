import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Visitor } from 'src/app/models/visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorServiceService {

  public confirmedVisitors : Visitor[] = [];
  public visitors : Visitor[] = [];
  constructor() { }

  deleteVisitor(email:string){
   const index = this.visitors.findIndex(x=> x.email == email);
   this.visitors.splice(index, 1);
  }
  addVisitor(newVisitor : Visitor){
    this.visitors.push(newVisitor);
  }
  resetForm(form: FormGroup){
    form.reset();
    form.controls['publishdateExpire'].setValue('1 month');
  }

  filterConfirm(): Visitor[] {
    return this.confirmedVisitors = this.visitors.filter(x=>x.isConfirmed == true);
  }
}

