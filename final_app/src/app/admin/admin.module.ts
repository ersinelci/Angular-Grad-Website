import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorAdminComponent } from './visitor-admin/visitor-admin.component';
import { PostsAdminComponent } from './posts-admin/posts-list/posts-admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PostCommentComponent } from './posts-admin/post-comment/post-comment.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VisitorAdminComponent,
    PostsAdminComponent,
    AdminHomeComponent,
    PostCommentComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
