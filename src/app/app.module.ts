import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { HotelItemComponent } from './hotel-item/hotel-item.component';
import { StarsComponent } from './hotel-item/stars/stars.component';
import { ReviewItemComponent } from './hotel-item/review-item/review-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMessageComponent,
    HotelItemComponent,
    StarsComponent,
    ReviewItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
