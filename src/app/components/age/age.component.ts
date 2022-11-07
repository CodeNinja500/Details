import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {AgeCalcResponseModel} from '../../models/age-calc-response.model';
import {AgeCalcService} from '../../services/age-calc.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgeComponent {
  readonly agePrediction$: Observable<AgeCalcResponseModel> = this._activatedRoute.params.pipe(switchMap(data => this._ageCalcService.getAge(data['name'])));

  constructor(private _ageCalcService: AgeCalcService, private _activatedRoute: ActivatedRoute) {
  }
}
