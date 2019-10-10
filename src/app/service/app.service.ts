import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Presentateur } from '../model/presentateur';
import { Session } from '../model/session';
import { map, tap } from 'rxjs/operators';
import { Schedule } from '../model/schedule';





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

  listeSessions: Session[] = [];
  listePresentateurs: Presentateur[] = [];



  recupererSessionById(idSession: string): Session {
    let sessionTrouvee: Session;

    this.listeSessions.forEach(element => {

      if (element.id === parseInt(idSession)) {
        sessionTrouvee = element;
      }

    });


    return sessionTrouvee;

  }


  recupererPresentateurs(): Observable<Presentateur[]> {
    return this.http.get<Presentateur[]>(`${this.urlGlobal}speakers`, this.httpOptions).pipe(
      map((liste) => {
        this.listePresentateurs = Object.values(liste);
        return Object.values(liste);
      })
    );
  }

  recupererSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(`${this.urlGlobal}sessions`, this.httpOptions).pipe(
      map((liste) => {
        this.listeSessions = Object.values(liste);
        return Object.values(liste);
      })
    );
  }

  recupererPlanning(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${this.urlGlobal}schedule`, this.httpOptions);
  }

}


