import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesstRoutingModule } from './tesst-routing.module';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    TesstRoutingModule
  ]
})
export class TesstModule { }
