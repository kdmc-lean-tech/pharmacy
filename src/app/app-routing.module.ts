import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/main-layout/main-layout.module')
      .then(m => m.MainLayoutModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./layouts/simple-layout/simple-layout.module')
      .then(m => m.SimpleLayoutModule)
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
