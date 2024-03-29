import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Post } from '../../../models/post';
import { PostService } from './posts-admin.service';

@Component({
  selector: 'app-posts-admin',
  templateUrl: './posts-admin.component.html',
  styleUrls: ['./posts-admin.component.css']
})
export class PostsAdminComponent implements OnInit {
  postList: Post[];

  constructor(private router: Router, private postService: PostService ) {
    this.postList = [];
  }

  ngOnInit(): void{
    this.postService.getAll().subscribe((x) => {
      this.postList = x;
    });
  }

  goToPostDetail(id: number) {
   
    this.router.navigate(['/posts-comment', id]);
  }
 
}
