import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadPostComponent } from './components/upload-post/upload-post.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [UploadPostComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
