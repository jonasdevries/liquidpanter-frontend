import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  data: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data;
    console.log(this.data)
  }

}
