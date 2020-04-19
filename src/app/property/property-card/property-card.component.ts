import { Component } from '@angular/core';
@Component ( {
  selector: 'app-propery-card',
  templateUrl: 'property-card.component.html',
  styleUrls:  ['property-card.component.css']
}
)
export class PropertyCardComponent{

  Property: any ={
    "id" :1,
    "Name" : "Birla House",
    "Type":"House",
    "Price" : 12000

  }

}
