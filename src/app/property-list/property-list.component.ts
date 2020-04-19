import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {



  Properties: Array<any> =[{
    "id" :1,
    "Name" : "Birla House",
    "Type":"House",
    "Price" : 12000
  },
  {
    "id" :2,
    "Name" : "my villa",
    "Type":"villa",
    "Price" : 50000
  },
  {
    "id" :3,
    "Name" : "my home",
    "Type":"HHome",
    "Price" : 2500
  },
]




  constructor() { }

  ngOnInit(): void {
  }

}
