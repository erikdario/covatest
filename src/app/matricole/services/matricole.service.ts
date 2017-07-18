import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Matricola } from "../models/matricola";

@Injectable()
export class MatricoleService {

  constructor(private http: Http) {
  }

  getMatricole(): Observable<Matricola[]> {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Origin', 'http://localhost');
    myHeaders.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    myHeaders.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    let options = new RequestOptions({ headers: myHeaders });

    return this.http.get("http://localhost/wsapp/Service1.svc/GetMatricole",options)
      .map((res: Response) => res.json())
      // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
      .catch((error: any) => Observable.throw(error));
  }
}
