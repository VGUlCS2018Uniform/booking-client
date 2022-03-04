import { Component, Input, OnInit } from '@angular/core';
import { BookingService } from 'src/app/Service/booking.service';
import { Booking } from '../booking-section/booking.model';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {
  @Input() bookingDetails:Booking 
  constructor(private bookingService:BookingService) { }

  ngOnInit(): void {
    this.bookingService.getCurrentBooking.subscribe(
      bookingData => {this.bookingDetails=bookingData; console.log("this is detail component, received")}
    )
  }
  
  
}
