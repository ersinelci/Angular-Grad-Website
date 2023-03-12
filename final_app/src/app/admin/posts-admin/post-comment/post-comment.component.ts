import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot,ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../../models/post';
import { PostService } from '../posts-list/posts-admin.service';
import { PostsComment } from '../../../models/posts-comment';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  postComment?: PostsComment;
  constructor(private activatedRoute: ActivatedRoute,
    private postService: PostService, private router: Router){

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.postService.getById(id).subscribe((x) => {
      this.postComment = x;
    });

    this.activatedRoute.params.subscribe((param: any) => {
      console.log(param);
      this.postService.getById(param.id).subscribe((x) => {
        this.postComment = x;
      });
    });
  }
}
