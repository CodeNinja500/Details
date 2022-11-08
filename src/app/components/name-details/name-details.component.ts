import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {GenderModel} from '../../models/gender.model';
import {AgeCalcResponseModel} from '../../models/age-calc-response.model';
import {AgeCalcService} from '../../services/age-calc.service';
import {GenderService} from '../../services/gender.service';
import {NationalityService} from '../../services/nationality.service';
import {NationalityBestModel} from "../../models/nationality-best.model";
import {NationalityApiResponseModel} from "../../models/nationality-api-response.model";
import {CountryModel} from "../../models/country.model";

@Component({
  selector: 'app-name-details',
  templateUrl: './name-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameDetailsComponent {
  readonly gender$: Observable<GenderModel> = this._activatedRoute.params.pipe(switchMap(data => this._genderService.getGender(data['name'])));
  readonly name$: Observable<string> = this._activatedRoute.params.pipe(map((data: Params) => {
    return data['name']
  }));
  readonly age$: Observable<AgeCalcResponseModel> = this._activatedRoute.params.pipe(switchMap(data => this._ageCalcService.getAge(data['name'])));
  readonly nationality$: Observable<String> = this._activatedRoute.params.pipe(switchMap(data => this._nationalityService.getNationality(data['name']).pipe(map((response) => {
      return response.country[0].country_id
    }
  ))));

  constructor(private _ageCalcService: AgeCalcService, private _genderService: GenderService, private _nationalityService: NationalityService, private _activatedRoute: ActivatedRoute) {
  }
}
