import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class UnitProvider {
    private _path = 'units/';

    constructor(private _httpClient: HttpClient) { }
  
    getUnits(): Observable<any> {
      return this._httpClient.get(environment.apiBaseUrl + this._path);
    }
  
    getUnit(key: string): Observable<any> {
      return this._httpClient.get(environment.apiBaseUrl + this._path + key);
    }
}