import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingConnectionService, Room, RoomSize } from 'src/app/Service/httpConnection.service';

@Component({
  selector: 'app-booking-dialogue',
  templateUrl: './booking-dialogue.component.html',
  styleUrls: ['./booking-dialogue.component.scss']
})
export class BookingDialogueComponent implements OnInit {
  RoomGroup: FormGroup;
  RoomSizeGroup: FormGroup;
  SelectedSize:string;
  SelectedRoom:Room;
  SelectedRoomTimesheet:Date[]=[];
  RoomSizeArray: string[]
  originalRoomArray:Room[]
  filteredRoomArray:Room[]
  isLinear:Boolean=true
  getRoomSizes(){
    const keys = Object.keys(RoomSize);
    return keys;
  }
  
  constructor(private conn:BookingConnectionService, private cdref: ChangeDetectorRef,private _formBuilder:FormBuilder){
  
  }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.loadRooms()
    this.RoomSizeArray=this.getRoomSizes()
    this.cdref.detectChanges()
   
  
  }
  
  loadRooms(){
    this.conn.fetchAllRoom().subscribe((inData) =>{
      let newData=[]
      for (const entry of inData){
          newData.push(new Room(entry))
      }
      this.originalRoomArray=newData   
    })
  }

  selectSize(size:string){
    this.SelectedSize=size.toLocaleLowerCase()
    this.filteredRoomArray=this.originalRoomArray.slice().filter(element => element.size==this.SelectedSize)
    console.log(this.filteredRoomArray)
  }

  selectRoom(room:Room){
      this.SelectedRoom=room
      this.conn.getRoomTimesheet(this.SelectedRoom.uuid).subscribe((data)=>this.SelectedRoomTimesheet=data)
      console.log(this.SelectedRoomTimesheet)

  }
}
