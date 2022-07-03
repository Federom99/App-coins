import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  baseURL = environment.apiURL + 'coins/';
  constructor(private http: HttpClient) {}

  getDetail(id: string): Observable<User> {
    const url = this.baseURL + id;
    return this.http.get<User>(url);
  }
}
