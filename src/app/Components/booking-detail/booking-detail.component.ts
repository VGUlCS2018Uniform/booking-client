import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../booking-section/booking.model';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {
  @Input() bookingDetails:Booking
  constructor() { }

  ngOnInit(): void {
  }

}
