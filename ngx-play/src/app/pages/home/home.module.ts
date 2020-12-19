import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';


@NgModule({
  declarations: [HomeComponent, FooComponent, BarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
