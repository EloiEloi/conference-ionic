import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }

  recuperer(): Observable<Favori[]> {
    return this.http.get<Favori[]>("https://devfest-nantes-2018-api.cleverapps.io/", this.httpOptions);
  }
  //https://devfest-nantes-2018-api.cleverapps.io/schedule https://devfest-nantes-2018-api.cleverapps.io/

}


