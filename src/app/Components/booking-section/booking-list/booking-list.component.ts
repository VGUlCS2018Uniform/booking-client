import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking.model';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  bookingList: Booking[]=[   
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date())
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
