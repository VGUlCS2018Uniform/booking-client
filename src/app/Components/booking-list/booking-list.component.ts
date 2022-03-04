import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { BookingService } from 'src/app/Service/booking.service';
import { Booking } from '../booking-section/booking.model';
import {ChangeDetectorRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BookingListComponent implements OnInit {
  bookingList: Booking[]=[   
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
    new Booking("1","2","3",new Date(),new Date()),
    new Booking("1","4","15",new Date(),new Date()),
    new Booking("1","12312S","12",new Date(),new Date()),
  ] 
  data:MatTableDataSource<Booking>
  @ViewChild('paginator') paginator: MatPaginator;
  expandedElement:Booking|null
  displayedColumns=["bookingid","userid","roomid","check_in_date","check_out_date","action"]
  constructor(private bookingService:BookingService, private cdref: ChangeDetectorRef) { }
  
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.data = new MatTableDataSource(this.bookingList)
    this.data.paginator=this.paginator
    this.bookingList
    this.cdref.detectChanges()
    // const eventObservable = Observable.create(observer =>{})
  }
  onBookingSelected(event:Booking){
    this.bookingService.setBooking(event)
  }  
  
  expandBooking(event:Booking){
    this.expandedElement=event
  }

  onActionSelected(event:Booking){
    console.log("event callssec")
    console.log(event)
  }
}
