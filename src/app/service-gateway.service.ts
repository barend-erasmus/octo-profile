import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiceGatewayService {
    constructor(
        private baseUri: string,
        private http: HttpClient,
    ) {

    }

    public get<T>(uri: string, params: any): Observable<T> {

        const token = localStorage.getItem('token');

        const headers = new HttpHeaders()
        .set('authorization', `Bearer ${token}`);

        const queryString = params ? Object.keys(params).map((key) => `${key}=${params[key]}`).join('&') : '';
        return this.http.get<T>(`${this.baseUri}${uri}?${queryString}`, {
            headers,
        });
    }

    public post<T>(uri: string, json: any): Observable<T> {
        const token = localStorage.getItem('token');

        const headers = new HttpHeaders()
        .set('authorization', `Bearer ${token}`);

        return this.http.post<T>(`${this.baseUri}${uri}`, json, {
            headers,
        });
    }

    public put<T>(uri: string, json: any): Observable<T> {
        const token = localStorage.getItem('token');

        const headers = new HttpHeaders()
        .set('authorization', `Bearer ${token}`);

        return this.http.put<T>(`${this.baseUri}${uri}`, json, {
            headers,
        });
    }
}
