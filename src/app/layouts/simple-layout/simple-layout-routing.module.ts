import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from './simple-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../../core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      { path: '', component: LoginComponent, canActivate: [AuthGuard] }
    ]
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
export class SimpleLayoutRoutingModule { }
