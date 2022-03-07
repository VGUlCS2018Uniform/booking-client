import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadersComponent } from './Components/BookingComponents/headers/headers.component';
import { BookingSectionComponent } from './Components/BookingComponents/booking-section/booking-section.component';
import { BookingDetailComponent } from './Components/BookingComponents/booking-detail/booking-detail.component';
import { BookingListComponent } from './Components/BookingComponents/booking-list/booking-list.component';
import { BookingDialogueComponent } from './Components/BookingComponents/booking-dialogue/booking-dialogue.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { BookingService } from './Service/booking.service';
import { BookingConnectionService } from './Service/httpConnection.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    BookingSectionComponent,
    BookingDetailComponent,
    BookingListComponent,
    BookingDialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [BookingService,BookingConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
