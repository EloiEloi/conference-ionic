import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Presentateur } from '../model/presentateur';
import { Session } from '../model/session';
import { map } from 'rxjs/operators';
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
  urlImageBase = 'https://devfest2018.gdgnantes.com/';

  constructor(private http: HttpClient) { }

  listeSessions: Session[] = [];
  listePresentateurs: Presentateur[] = [];


  recupererPresentateurById(idpresentateur: string): Presentateur {
    let presentateurTrouvee: Presentateur;
    this.listePresentateurs.forEach(element => {
      if (element.id === parseInt(idpresentateur)) {
        presentateurTrouvee = element;
      }
    });
    return presentateurTrouvee;
  }


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

    if (localStorage.getItem('presentateurs')) {

      return of(JSON.parse(localStorage.getItem('presentateurs')));

    }

    return this.http.get<Presentateur[]>(`${this.urlGlobal}speakers`, this.httpOptions).pipe(
      map((liste) => {
        this.listePresentateurs = Object.values(liste);
        this.listePresentateurs.forEach(element => {
          if (typeof (element.id) === 'string') {
            element.id = parseInt(element.id);
          }
        });
        localStorage.setItem('presentateurs', JSON.stringify(this.listePresentateurs));
        return Object.values(liste);
      })
    );
  }

  recupererSessions(): Observable<Session[]> {
    if (localStorage.getItem('sessions')) {

      return of(JSON.parse(localStorage.getItem('sessions')));

    }

    return this.http.get<Session[]>(`${this.urlGlobal}sessions`, this.httpOptions).pipe(
      map((liste) => {
        this.listeSessions = Object.values(liste);
        localStorage.setItem('sessions', JSON.stringify(this.listeSessions));
        return Object.values(liste);
      })
    );
  }

  recupererPlanning(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${this.urlGlobal}schedule`, this.httpOptions);
  }

}


