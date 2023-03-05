import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { VisitorComponent } from './admin/visitor/visitor.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'anasayfa', component: HomeComponent},
      {path: 'hakkimizda', component: AboutComponent},
      {path: 'galeri', component: GalleryComponent},
      {path: 'ziyaretci-sayfasi', component: VisitorComponent}
    ]
  },

{
  path: 'admin', component: AdminLayoutComponent, children:  [
    {path: 'ziyaretci-sayfasi', component: VisitorComponent}
  ]
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
