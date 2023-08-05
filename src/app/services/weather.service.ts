import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }

  getWeatherData(cityName:string):Observable<WeeatherData>{
    return this.http.get<WeeatherData>(environment.apiUrl+'/city/'+cityName, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyheaderName,environment.XRapidAPIKeyheaderValue),
    });
   }
}
