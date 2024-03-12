import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  numOfRoom = 10;
  hotelName = 'RALOX WILL LEAD';
  hiddenrooms = false;
  room: Room = {
    bookedRooms: 10,
    available: 45,
  };
  roomListData: RoomList[] = [
    {
      roomType: 'Standard',
      prices: '$100',
      code: 'STD001',
      agreed: true,
    },
    {
      roomType: 'Deluxe',
      prices: '$200',
      code: 'DLX001',
      agreed: false,
    },
    {
      roomType: 'Suite',
      prices: '$300',
      code: 'STE001',
      agreed: true,
    },
  ];

  constructor() {}
  ngOnInit(): void {}
  toggle() {
    this.hiddenrooms = !this.hiddenrooms;
  }
}
