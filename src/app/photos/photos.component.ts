import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  height:number=300;
  width: number=300;
  url:string='./images/1.jpg';
  name:string='cat image';
   item1: string="item1";
   item2: string="item2";
   item3: string="item3";

  constructor() { }

  ngOnInit(): void {
  }
getTitle():string{
return 'Photos page';
}
}
