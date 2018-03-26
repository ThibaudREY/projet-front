import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent implements OnInit {

  @Input() wheather: object;

  uuid: string;

  constructor() { }

  ngOnInit() {
  }

}
