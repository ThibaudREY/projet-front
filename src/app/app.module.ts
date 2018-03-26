import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TownListComponent } from './town-list/town-list.component';
import { TownComponent } from './town/town.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { WheatherComponent } from './wheather/wheather.component';

@NgModule({
  declarations: [
    AppComponent,
    TownListComponent,
    TownComponent,
    WheatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
