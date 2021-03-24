import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUiLoaderConfig, NgxUiLoaderModule } from 'ngx-ui-loader';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingComponent } from './loading.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  'bgsColor': 'red',
  'bgsOpacity': 0.5,
  'bgsPosition': 'bottom-right',
  'bgsSize': 60,
  'bgsType': 'ball-spin-clockwise',
  'blur': 5,
  'delay': 0,
  'fastFadeOut': true,
  'fgsColor': '#a44704',
  'fgsPosition': 'center-center',
  'fgsSize': 60,
  'fgsType': 'cube-grid',
  'gap': 24,
  'logoPosition': 'center-center',
  'logoSize': 120,
  'logoUrl': '',
  'masterLoaderId': 'master',
  'overlayBorderRadius': '0',
  'overlayColor': 'rgba(40, 40, 40, 0.8)',
  'pbColor': 'red',
  'pbDirection': 'ltr',
  'pbThickness': 3,
  'hasProgressBar': false,
  'text': '',
  'textColor': '#FFFFFF',
  'textPosition': 'center-center',
  'maxTime': -1,
  'minTime': 300
};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class LoadingModule { }
