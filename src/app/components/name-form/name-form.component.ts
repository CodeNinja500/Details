import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameFormComponent {
  readonly nameForm: FormGroup = new FormGroup({ name: new FormControl() });

  onNameFormSubmitted(nameForm: FormGroup): void {
  }
}
