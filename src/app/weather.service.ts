import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  URL = "https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=f5326281d9c8f9fc4a3ca3019ee363da";
  constructor(private http: HttpClient) { }

  getPostData() {
    let req = this.http.get(this.URL)
    console.log('Requests: ',req)
    return req
  }
}
