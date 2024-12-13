import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shardul } from './shardul';

@Injectable({
  providedIn: 'root'
})
export class ShardulService {

  constructor(private _httpclient: HttpClient) { }

  baseUrl: string = "http://localhost:3000/api/v1/candidates";

  fetchAllCandidates(): Observable<Shardul[]> {
    return this._httpclient.get<Shardul[]>(`${this.baseUrl}`);
  }

  createShardul(data: Shardul): Observable<Shardul> {
    return this._httpclient.post<Shardul>(`${this.baseUrl}`, data);
  }

  updateShardul(data: Shardul): Observable<Shardul> {
    return this._httpclient.put<Shardul>(`${this.baseUrl}/${data.id}`, data);
  }

  deleteShardul(id: Number): Observable<void> {
    return this._httpclient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
