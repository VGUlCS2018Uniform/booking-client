import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeadersComponent } from './Components/headers/headers.component';
import { FormsModule } from '@angular/forms';
import { BookingSectionComponent } from './Components/booking-section/booking-section.component';
import { BookingDetailComponent } from './Components/booking-detail/booking-detail.component';
import { BookingService } from './Service/booking.service';
import { BookingListComponent } from './Components/booking-list/booking-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    BookingSectionComponent,
    BookingDetailComponent,
    BookingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
