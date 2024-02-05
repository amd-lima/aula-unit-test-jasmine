import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Investments } from '../model/investments';

@Injectable({
  providedIn: 'root'
})
export class ListInvestmentsService {

  public url = 'http://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json'

  constructor(
    private http: HttpClient
  ) { }

  public list():Observable<Array<Investments>>{
    return this.http.get<Array<Investments>>(this.url).pipe(
      map(
        (response) => {
          return response;
        }
      )
    );
  }

}
