import {Component, Input, OnInit} from '@angular/core';
import {Town} from "../town";
import {TownApiService} from "../town-api.service";

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.css']
})
export class TownComponent implements OnInit {

  @Input() town: Town;

  date: Date;

  constructor(private townApiService: TownApiService) {
    this.clockInit();
  }

  ngOnInit() {
  }

  reloadWeather() {
    this.date = new Date();
    this.townApiService.GetTownById(this.town.id).subscribe(town => this.town = town)
  }

  private clockInit() {
    this.date = new Date();
  }
}
