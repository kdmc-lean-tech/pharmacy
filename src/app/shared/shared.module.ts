import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';



@NgModule({
  declarations: [FooterComponent, CarouselComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
