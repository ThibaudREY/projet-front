import { Component, OnInit } from '@angular/core';
import { TownComponent } from "../town/town.component";
import { TownApiService } from '../town-api.service';
import {Town} from "../town";


@Component({
  selector: 'app-town-list',
  templateUrl: './town-list.component.html',
  styleUrls: ['./town-list.component.css'],
  providers: [TownApiService]
})
export class TownListComponent implements OnInit {

  towns: Town[] = [];

  constructor(private townApiService: TownApiService) { }

  ngOnInit() {
    this.townApiService.GetAllTowns().subscribe(town => this.towns = town);
  }
}
