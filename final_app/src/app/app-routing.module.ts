import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { VisitorAdminComponent } from './admin/visitor-admin/visitor-admin.component';
import { VisitorPageComponent } from './pages/visitor-page/visitor-page.component';
import { PostsAdminComponent } from './admin/posts-admin/posts-list/posts-admin.component';
import { UsersAdminComponent } from './admin/users-admin/users-admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { PostCommentComponent } from './admin/posts-admin/post-comment/post-comment.component';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'anasayfa', component: HomeComponent},
      {path: 'hakkimizda', component: AboutComponent},
      {path: 'galeri', component: GalleryComponent},
      {path: 'ziyaretci-defteri', component: VisitorPageComponent}
    ]
  },

{
  path: 'admin', component: AdminLayoutComponent, children:  [
    {path: 'ziyaretci-kontrol', component: VisitorAdminComponent},
    {path: 'posts-list',component: PostsAdminComponent},
    {path: 'posts-comment/:id', component: PostCommentComponent},
    {path: 'users-detail/:id', component: UserDetailComponent},
    {path: 'users-admin',component: UsersAdminComponent},
    {path: 'home',component:AdminHomeComponent}
  ]
}
];

@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
