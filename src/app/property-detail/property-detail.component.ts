import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyid: number ;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.propertyid=this.route.snapshot.params['id'];
  }

}
