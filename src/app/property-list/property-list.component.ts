import { Component, OnInit, Input } from '@angular/core';

import { HousingService } from '../services/housing.service';
import { Iproprty } from '../property/IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<Iproprty>;
  constructor(private housingservice: HousingService) { }

  ngOnInit(): void {
       this.housingservice.getAllProperties().subscribe(
          data=>{
                this.Properties = data;
                console.log(data);
                },error =>{
                          console.log('httperror:');
                          console.log(error);
                          });
  }

  }

