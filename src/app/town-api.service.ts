import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Town } from './town';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import "rxjs/add/operator/catch";
import {environment} from '../environments/environment';

const TOWN_API_URL = environment.TOWN_API_URL;
const headers = new HttpHeaders()
  .set('Content-Type', 'application/json');

@Injectable()
export class TownApiService {

  constructor(private http: HttpClient) { }

  private handleError (error: any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  //Getter on all towns
  public GetAllTowns(): Observable<Town[]> {
    return this.http
      .get<Town[]>(TOWN_API_URL + 'towns.json')
      .catch(this.handleError);
  }

  // API ENDPOINT GET /towns/:id
  public GetTownById(id: number): Observable<Town> {
    return this.http
      .get<Town[]>(TOWN_API_URL + 'towns/' + id + '.json')
      .catch(this.handleError);
  }

  // API ENDPOINT UPDATE /towns/:id
  public UpdateTown(town: Town): Observable<Town> {
    return this.http.put<Town>(TOWN_API_URL + 'towns/' + town.id + '.json', town, {headers}).catch(this.handleError);
  }

}
