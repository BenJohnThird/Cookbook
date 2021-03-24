import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingContentComponent } from './landing-content.component';

@NgModule({
  declarations: [LandingContentComponent],
  exports: [LandingContentComponent],
  imports: [
    CommonModule,
  ]
})
export class LandingContentModule { }
