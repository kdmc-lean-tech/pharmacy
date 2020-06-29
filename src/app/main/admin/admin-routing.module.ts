import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UploadPostComponent } from './components/upload-post/upload-post.component';
import { AuthGuard } from '../../core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UploadPostComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
