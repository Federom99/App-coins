import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoinsServices {
  private API_SERVER = 'https://api.coingecko.com/api/v3/coins';

  constructor(public http: HttpClient) {}
  public getCoins(): Observable<any> {
    return this.http.get(this.API_SERVER);
  }
}
