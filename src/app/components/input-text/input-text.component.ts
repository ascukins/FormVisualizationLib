import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormItem } from '../../models/FormItem';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent implements OnChanges {
  @Input() formItem: FormItem;

  constructor() { }

  ngOnChanges() {
  }

}
