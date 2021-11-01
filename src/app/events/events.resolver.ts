import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {EventsService} from './events.service';

@Injectable({
  providedIn: 'root'
})
export class EventsResolver implements Resolve<any> {

  constructor(private eventService: EventsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.eventService.getAllEvents();
  }
}
