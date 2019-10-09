import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Presentateur } from '../model/presentateur';
import { Session } from '../model/session';
import { map } from 'rxjs/operators';



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

  urlGlobal = 'https://devfest-nantes-2018-api.cleverapps.io/';

  constructor(private http: HttpClient) { }

  recupererPresentateurs(): Observable<Presentateur[]> {
    return this.http.get<Presentateur[]>(`${this.urlGlobal}speakers`, this.httpOptions).pipe(map((liste) => Object.values(liste)));
  }

  recupererSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(`${this.urlGlobal}sessions`, this.httpOptions).pipe(map((liste) => Object.values(liste)));
  }

  recupererPlanning(): Observable<Date[]> {
    return this.http.get<Date[]>(`${this.urlGlobal}/schedule`, this.httpOptions);
  }

}


