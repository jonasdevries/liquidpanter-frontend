import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from './events/events.component';
import {EventsResolver} from './events/events.resolver';

const routes: Routes = [
  {
    path: "events",
    component: EventsComponent,
    resolve: {data: EventsResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
