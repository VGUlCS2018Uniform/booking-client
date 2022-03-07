import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Booking, BookingDTO } from "../Components/BookingComponents/booking-section/booking.model";










@Injectable()
export class BookingConnectionService{
    constructor(private http: HttpClient){}

    fetchAllBooking():Observable<BookingDTO[]>{
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NmEzMmJmNy0yYjRmLTQyZmEtYjgyOS05ZTk3NzJmMGZlZmYiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjQ2NjE3NDg4LCJleHAiOjE2NDY3MDM4ODh9.ec583TTSxyXI9RnkmroJXbjDVwVRMKWr6MbQqKU8Fj4'
            })
          };
          console.log("fetch Bookings flared")
        return this.http.get<BookingDTO[]>("http://localhost:3000/booking",httpOptions);
    }

    //====================== NOTE: BELOW HERE ARE HTTP SCRIPTS CREATED TO RETRIEVE DATA FROM DATABASE FOR TESTING ONLY ==================
    


    fetchAllRoom():Observable<RoomDTO[]>{
      const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NmEzMmJmNy0yYjRmLTQyZmEtYjgyOS05ZTk3NzJmMGZlZmYiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjQ2NjE3NDg4LCJleHAiOjE2NDY3MDM4ODh9.ec583TTSxyXI9RnkmroJXbjDVwVRMKWr6MbQqKU8Fj4'
          })
        };
        console.log("fetch Rooms flared")
      return this.http.get<RoomDTO[]>("http://localhost:3000/rooms",httpOptions);
  }
}

export class RoomDTO{
  public id:string;
  public codeName:string;
  public size:RoomSize;
  public price:string;
  public image:string;
  public isVacant:boolean; 
}
export enum RoomSize {
  SINGLE = 'single',
  DOUBLE = 'double',
  DORMITORY = 'dormitory',
}
export class Room{
  public uuid:string;
  public codeName:string;
  public size:RoomSize;
  public price:string;
  public image:string;
  public isVacant:boolean; 

  constructor(dto:RoomDTO){
      this.uuid=dto.id;
      this.codeName=dto.codeName;
      this.size=dto.size;
      this.price=dto.price;
      this.image=dto.image;
      this.isVacant=dto.isVacant;
  }
}