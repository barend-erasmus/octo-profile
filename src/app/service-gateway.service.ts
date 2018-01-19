import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

        let headers = new HttpHeaders();

        if (token) {
            headers = headers.set('authorization', `Bearer ${token}`);
        }

        const queryString = params ? Object.keys(params).filter((key) => params[key]).map((key) => `${key}=${params[key]}`).join('&') : '';
        return this.http.get<T>(`${this.baseUri}${uri}?${queryString}`, {
            headers,
            observe: 'response',
        }).map((res: HttpResponse<T>) => {
            return res.body;
        });
    }

    public post<T>(uri: string, json: any): Observable<T> {
        const token = localStorage.getItem('token');

        let headers = new HttpHeaders();

        if (token) {
            headers = headers.set('authorization', `Bearer ${token}`);
        }

        return this.http.post<T>(`${this.baseUri}${uri}`, json, {
            headers,
            observe: 'response',
        }).map((res: HttpResponse<T>) => {
            return res.body;
        });
    }

    public put<T>(uri: string, json: any): Observable<T> {
        const token = localStorage.getItem('token');

        let headers = new HttpHeaders();

        if (token) {
            headers = headers.set('authorization', `Bearer ${token}`);
        }

        return this.http.put<T>(`${this.baseUri}${uri}`, json, {
            headers,
            observe: 'response',
        }).map((res: HttpResponse<T>) => {
            return res.body;
        });
    }
}
