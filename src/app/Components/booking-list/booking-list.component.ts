import { Component, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { BookingService } from 'src/app/Service/booking.service';
import { Booking, IBookingInterface } from '../booking-section/booking.model';
import {ChangeDetectorRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { backEndConnection } from 'src/app/Service/httpConnection.service';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

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
export class BookingListComponent implements OnInit, OnChanges {
  dummyArray:Booking[]
  bookingData:MatTableDataSource<Booking>
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort=new MatSort();
  expandedElement:Booking|null
  displayedColumns=["bookingid","userid","roomid","check_in_date","check_out_date","action"]
  
  
  constructor(private bookingService:BookingService, 
              private cdref: ChangeDetectorRef, 
              private conn:backEndConnection,
              private _liveAnnouncer: LiveAnnouncer) { }
  ngOnInit(): void {
    
  }
  ngOnChanges(){
    this.cdref.detectChanges();
  }
  ngAfterViewInit() {
    this.refreshData()
    this.bookingData = new MatTableDataSource(this.dummyArray)
    this.bookingData.paginator=this.paginator
    this.bookingData.sort=this.sort
    this.cdref.detectChanges()
    // const eventObservable = Observable.create(observer =>{})
  }
  onBookingSelected(event:Booking){
    this.bookingService.setBooking(event)
    this.bookingService.toggleOffSidebar()
  }  


  onActionSelected(event:Booking){
    this.bookingService.setBooking(event) 
  }

  sortData(event:Sort){
    const modData = this.bookingData.data.slice();
    if (!event.active || event.direction === '') {
      return;
    }
    let l1 = modData.sort((a, b) => {
      switch (event.active) {
        case 'cInDate':
          return this.compareDate(a.check_in_date, b.check_in_date);
        case 'cOutDate':
          return this.compareDate(a.created_date, b.created_date);
        case 'CreateDate':
          return this.compareDate(a.created_date, b.created_date);
        default:
          return 0;
      }
    });
    if (event.direction==="asc"){
      this.bookingData.data=l1;
    }
    else this.bookingData.data=l1.reverse()
 
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  compareDate(a:any,b:any){
    return (Date.parse(a) < Date.parse(b) ? -1 : 1);
  }
  
  refreshData(){
    this.conn.fetchAllBooking().subscribe((inData) =>{
      
      let newData=[]
      for (const entry of inData){
          newData.push(new Booking(entry))
      }
      newData=newData.sort(()=>Math.random()-.5) 
      this.bookingData.data=newData
      
    })
  }
}
