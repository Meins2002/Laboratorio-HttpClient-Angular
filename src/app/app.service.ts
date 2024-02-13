import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from './answer.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private _http: HttpClient) { }

  apiUrl:any
  obtenerRespuesta() {
    return this._http.get<Answer>(this.apiUrl);
  }
}
