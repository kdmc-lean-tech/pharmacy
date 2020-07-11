import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MaterialModule } from './modules/material/material.module';
import { NgxLoadingModule } from 'ngx-loading';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent, CarouselComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgxLoadingModule.forRoot({}),
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CarouselModule,
    NgxLoadingModule
  ]
})
export class SharedModule { }
