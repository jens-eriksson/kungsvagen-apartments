import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class SalesAgentProvider {
    private _path = 'sales-agents/';

    constructor(private _httpClient: HttpClient) { }
  
    getSalesAgents(): Observable<any> {
      return this._httpClient.get(environment.apiBaseUrl + this._path);
    }
  
    getSalesAgent(key: string): Observable<any> {
      return this._httpClient.get(environment.apiBaseUrl + this._path + key);
    }
}