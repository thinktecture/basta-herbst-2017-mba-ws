import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Dish} from '../models/dish';

@Injectable()
export class PastaService {
    private readonly _baseUrl = 'https://bastambalive2017.azurewebsites.net/api/';

    constructor(private _http: HttpClient) {
    }

    public list(): Observable<Dish[]> {
        return this._http.get(`${this._baseUrl}dishes`);
    }

    public getById(id: string): Observable<Dish> {
        return this._http.get(`${this._baseUrl}dishes/${id}`);
    }

    public create(name: string, description: string): Observable<Dish> {
        return this._http.post(`${this._baseUrl}dishes`, { name, description });
    }
}
