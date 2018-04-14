import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor(public formService: FormService) {
  }

  ngOnInit() {
    // we might want to add json loading here in real life
  }

}
