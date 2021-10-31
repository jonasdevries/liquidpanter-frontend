import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<any>{
    return this.http.get('/api/events')
      .pipe(
        tap(x => console.log(`data - ${JSON.stringify(x)}`)),
      )
  }
}
