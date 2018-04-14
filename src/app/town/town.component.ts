import {Component, Input, OnInit} from '@angular/core';
import {Town} from "../town";
import {TownApiService} from "../town-api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.css']
})
export class TownComponent implements OnInit {

  @Input() town: Town;

  count: number = 0;

  constructor(private townApiService: TownApiService) {
    this.clockInit();
  }

  ngOnInit() {
  }

  reloadWeather() {
    this.count = 0;
    this.townApiService.GetTownById(this.town.id).subscribe(town => this.town = town)
  }

  private clockInit() {
    let t= Observable.interval(60000);
    t.subscribe(() => this.count++);
  }
}
