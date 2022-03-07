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
              'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NmEzMmJmNy0yYjRmLTQyZmEtYjgyOS05ZTk3NzJmMGZlZmYiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjQ2NjE3NDg4LCJleHAiOjE2NDY3MDM4ODh9.ec583TTSxyXI9RnkmroJXbjDVwVRMKWr6MbQqKU8Fj4'
            })
          };
          console.log("fetch flared")
        return this.http.get<BookingDTO[]>("http://localhost:3000/booking",httpOptions);
    }

}