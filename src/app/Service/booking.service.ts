import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, ReplaySubject, Subject } from "rxjs";
import { Booking } from "../Components/booking-section/booking.model";



@Injectable()
export class BookingService{
  
    private currentBooking:ReplaySubject<Booking> = new ReplaySubject( )
 
    public get getCurrentBooking(): Observable<Booking>{
      return this.currentBooking.asObservable();
    }
    setBooking(booking: Booking) {
      this.currentBooking.next(booking);
    }
    
}