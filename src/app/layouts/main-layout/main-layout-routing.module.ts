import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { AuthGuard } from '../../core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../main/landing/landing.module')
          .then(m => m.LandingModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../../main/admin/admin.module')
          .then(m => m.AdminModule),
        canActivate: [AuthGuard]
      }
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
export class MainLayoutRoutingModule { }
