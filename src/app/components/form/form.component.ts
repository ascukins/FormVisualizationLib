import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormWidget } from '../../models/FormWidget';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements  OnChanges {

  @Input() formWidget: FormWidget;

  constructor() { }

  ngOnChanges() {
  }

}
