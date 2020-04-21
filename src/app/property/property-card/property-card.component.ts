import { Component, Input } from '@angular/core';
import { Iproprty } from '../IProperty.interface';
@Component ( {
  selector: 'app-propery-card',
  templateUrl: 'property-card.component.html',
  styleUrls:  ['property-card.component.css']
}
)
export class PropertyCardComponent{
@Input() property : Iproprty;
}
