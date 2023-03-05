import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorAdminComponent } from './visitor-admin/visitor-admin.component';
import { PostsAdminComponent } from './posts-admin/posts-list/posts-admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PostCommentComponent } from './posts-admin/post-comment/post-comment.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    VisitorAdminComponent,
    PostsAdminComponent,
    AdminHomeComponent,
    PostCommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class AdminModule { }
