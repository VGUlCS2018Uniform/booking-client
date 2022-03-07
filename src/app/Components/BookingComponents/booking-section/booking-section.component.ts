import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../Service/booking.service';

@Component({
  selector: 'app-booking-section',
  templateUrl: './booking-section.component.html',
  styleUrls: ['./booking-section.component.scss']
})
export class BookingSectionComponent implements OnInit {
  
  constructor(bookingService:BookingService) { }
  
  ngOnInit(): void {
  }

}
