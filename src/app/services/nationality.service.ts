import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NationalityApiResponseModel} from '../models/nationality-api-response.model';
import {CountryModel} from "../models/country.model";

@Injectable()
export class NationalityService {
  constructor(private _httpClient: HttpClient) {
  }

  getNationality(name: string): Observable<NationalityApiResponseModel<CountryModel[]>> {
    return this._httpClient.get<NationalityApiResponseModel<CountryModel[]>>('https://api.nationalize.io/?name=' + name);
  }
}
