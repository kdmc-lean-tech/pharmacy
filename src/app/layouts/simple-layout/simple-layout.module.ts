import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SimpleLayoutComponent } from './simple-layout.component';
import { SimpleLayoutRoutingModule } from 'src/app/layouts/simple-layout/simple-layout-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [LoginComponent, SimpleLayoutComponent],
  imports: [
    CommonModule,
    SimpleLayoutRoutingModule,
    SharedModule
  ]
})
export class SimpleLayoutModule { }
