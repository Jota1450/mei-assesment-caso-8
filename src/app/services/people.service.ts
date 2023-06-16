import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private httpClient: HttpClient) {}

  getPeople(): Observable<{}> {
    const url: string = '/assets/people.json';
    return this.httpClient.get(url) as Observable<{}>;
  }
}
