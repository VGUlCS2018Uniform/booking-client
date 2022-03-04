import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Booking, BookingDTO } from "../Components/booking-section/booking.model";










@Injectable()
export class backEndConnection{
    constructor(private http: HttpClient){}

    fetchAllBooking():Observable<BookingDTO[]>{
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjNGUxZTgzZC02OTQ5LTRjYjEtOTkxNC1kOTQxMmRmZWIzOTkiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjQ2MzgwMDE4LCJleHAiOjE2NDY0NjY0MTh9.7xWiMWlTEAKmbIo9rsk--GB-QMeI6bLIAHwpg7mxOQo'
            })
          };
          console.log("fetch flared")
        return this.http.get<BookingDTO[]>("http://localhost:3000/booking",httpOptions);
    }

}