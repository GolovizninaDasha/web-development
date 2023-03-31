import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Meteo } from "./meteo";

@Injectable({
    providedIn: 'root'
  })

  export class MeteoServ {
    constructor(private http: HttpClient) { }

    getMeteo(): Observable<Meteo> {
        return this.http.get(
            `https://archive-api.open-meteo.com/v1/archive?latitude=58.60&longitude=49.66&start_date=2023-02-04&end_date=2023-03-05&hourly=temperature_2m&timezone=Europe%2FMoscow`
          ) as Observable<Meteo>;
    }
  }