import {Component, Input, OnInit} from '@angular/core';
import { Wheather } from "../wheather";

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent implements OnInit {

  @Input() wheather: Wheather;

  constructor() { }

  ngOnInit() {
  }

}
