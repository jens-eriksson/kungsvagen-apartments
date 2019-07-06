import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class ProjectProvider {
    private path = 'projects/';

    constructor(private httpClient: HttpClient) { }

    getProjects(): Observable<any> {
        return this.httpClient.get(environment.apiBaseUrl + this.path);
    }

    getProject(key: string): Observable<any> {
        return this.httpClient.get(environment.apiBaseUrl + this.path + key);
    }

    getUnits(key: string): Observable<any> {
        return this.httpClient.get(environment.apiBaseUrl + this.path + key + "/units"); 
    }
}