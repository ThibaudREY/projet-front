import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TownListComponent } from './town-list/town-list.component';
import { TownComponent } from './town/town.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { WheatherComponent } from './wheather/wheather.component';
import { AgmCoreModule } from '@agm/core';
import {environment} from '../environments/environment';
import { PreloaderDirective } from './preloader.directive';

@NgModule({
  declarations: [
    AppComponent,
    TownListComponent,
    TownComponent,
    WheatherComponent,
    PreloaderDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.MAPS_API_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
