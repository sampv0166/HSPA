import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Iproprty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
    getAllProperties(): Observable<Iproprty[]>
    {
  return  this.http.get('data/Properties.json').pipe(
            map(data =>{
              const propertiesarray: Array<Iproprty> = [];
              for (const id in data){
                if (data.hasOwnProperty(id)){
                propertiesarray.push(data[id]);
              }
            }
            return propertiesarray;
            })
  );
   }
}
