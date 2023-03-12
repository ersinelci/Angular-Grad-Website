import { Component } from '@angular/core';
import { VisitorServiceService } from './visitor-service.service';

@Component({
  selector: 'app-visitor-admin',
  templateUrl: './visitor-admin.component.html',
  styleUrls: ['./visitor-admin.component.css']
})
export class VisitorAdminComponent {
  constructor(public visitorService: VisitorServiceService){

  }

  isChecked: boolean = false;
  isDisabled: boolean = false;
  checkValue(_event: any){
    this.isChecked = !this.isChecked;
    this.isDisabled=true;
  }

}
