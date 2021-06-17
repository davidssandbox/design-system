import { NgModule } from '@angular/core';
import { PatternLibComponent } from './pattern-lib.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';



@NgModule({
  declarations: [
    PatternLibComponent,
    ButtonComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PatternLibComponent,
    ButtonComponent
  ]
})
export class PatternLibModule { }
