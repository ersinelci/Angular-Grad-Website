import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from '../users-admin/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  user?: User;

  constructor( private activatedRoute: ActivatedRoute,
    private userService: UserService){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.userService.getById(id).subscribe((x) => {
      this.user = x;
    });

    this.activatedRoute.params.subscribe((param: any) => {
      console.log(param);
      this.userService.getById(param.id).subscribe((x) => {
        this.user = x;
      });
    });
  }
}
