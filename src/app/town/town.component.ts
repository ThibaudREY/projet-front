import {Component, Input, OnInit} from '@angular/core';
import {Town} from "../town";

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.css']
})
export class TownComponent implements OnInit {

  @Input() town: Town;

  constructor() { }

  ngOnInit() {
  }

}
