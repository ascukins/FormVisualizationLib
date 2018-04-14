import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormSection } from '../../models/FormSection';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent implements OnChanges {

  @Input() formSection: FormSection;
  controlWidth: number;

  constructor() { }

  ngOnChanges() {
    if (this.formSection.columns) {
      switch (this.formSection.columns) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 6:
        case 12: this.controlWidth = Math.round(12 / this.formSection.columns); break;
        default: this.controlWidth = 12;
      }
    } else {
      this.controlWidth = 12;
    }
  }

}
