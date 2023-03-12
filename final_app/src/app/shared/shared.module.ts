import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    AdminLayoutComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    FormsModule
  
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
