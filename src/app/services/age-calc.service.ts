import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AgeCalcResponseModel} from '../models/age-calc-response.model';

@Injectable()
export class AgeCalcService {
  constructor(private _httpClient: HttpClient) {
  }

  getAge(name: string): Observable<AgeCalcResponseModel> {
    return this._httpClient.get<AgeCalcResponseModel>('https://api.agify.io/?name=' + name);
  }
}
