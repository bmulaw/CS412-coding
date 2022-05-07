import { Injectable } from '@angular/core';
import { HttpClient, HttpParams }from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getCapital(country : string) {
    console.log(country)
    let queryParams = new HttpParams();
    queryParams = queryParams.append("country",country);
    return this.http.get('/api/capital', {params: queryParams})
  }
}
