import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';



@NgModule({
  declarations: [MainLayoutComponent, NavbarComponent],
  imports: [
    CommonModule,
    MainLayoutRoutingModule
  ]
})
export class MainLayoutModule { }
