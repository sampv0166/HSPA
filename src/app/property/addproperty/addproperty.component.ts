import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {

  constructor(private router: Router
    ) { }

  ngOnInit() {
  }
onBack()
{
  this.router.navigate(['/']);
}
}
