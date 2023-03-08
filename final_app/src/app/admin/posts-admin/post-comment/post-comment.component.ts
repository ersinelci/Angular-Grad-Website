import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot,ActivatedRoute,Router } from '@angular/router';
import { Post } from '../../../models/post';
import { PostService } from '../../../models/posts-admin.service';
import { PostsComment } from '../../../models/posts-comment';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  postComment?: PostsComment;
  constructor(private routeSnapshot:ActivatedRouteSnapshot, 
    private postService: PostService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
      let id = this.routeSnapshot.params['id'];
      this.postService.getById(id).subscribe((x)=> {
        this.postComment = x;

      })
      this.activatedRoute.params.subscribe((param: any) => {
        console.log(param);
        this.postService.getById(param.id).subscribe((x) => {
          this.postComment = x;
        });
      });
  }
}
