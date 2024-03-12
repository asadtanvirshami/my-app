export interface Room {
    available?:number;
    bookedRooms?:number;
}

export interface RoomList{
    roomType:string;
    prices:string;
    code:string;
    agreed:boolean;
}