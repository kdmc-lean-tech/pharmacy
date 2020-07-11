import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadPostComponent } from './components/upload-post/upload-post.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [UploadPostComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
