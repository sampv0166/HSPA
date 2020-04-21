import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';
import { AddpropertyComponent } from './property/addproperty/addproperty.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

const appRoutes: Routes = [

  {path: 'add-property',component:AddpropertyComponent },
  {path: 'rent-property',component:PropertyListComponent },
  {path: 'property-detail/:id',component:PropertyDetailComponent },
  {path: '',component:PropertyListComponent }
]

@NgModule({
   declarations: [
      AppComponent,
      PropertyCardComponent,
      PropertyListComponent,

      NavBarComponent,
      AddpropertyComponent,
      PropertyDetailComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
     HousingService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
