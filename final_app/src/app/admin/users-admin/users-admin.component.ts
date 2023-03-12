import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent {
  userList:User[];

  constructor(private router:Router,private userService:UserService){
    this.userList=[];
  }
  
  ngOnInit(): void {
     this.userService.getAll().subscribe((x) => {
      this.userList = x;
    });
  }

   goToUserById(id: number) {
    
    this.router.navigate(['/admin/user-detail',id]);
  }
}
