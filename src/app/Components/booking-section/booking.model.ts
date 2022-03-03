
export class Booking {
    public uuid:string
    public userid:string;
    public roomid:string
    public check_in_date:Date
    public check_out_date:Date 
    constructor( uuid:string, userid:string, roomid:string, check_in_date:Date,  check_out_date:Date){
        this.uuid = uuid
        this.userid=userid
        this.roomid=roomid
        this.check_in_date=check_in_date
        this.check_out_date=check_out_date
    }
}