import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeadquartersComponent } from './components/headquarters/headquarters.component';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ContactComponent, ServicesComponent, AboutUsComponent, HeadquartersComponent, LandingComponent, PostsComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
