import { Injectable } from '@angular/core';
import { Widgets } from '../models/Widgets';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormService {
  widgets: Widgets | any;
  jsonPath = '';

  loadJson() {
   if (this.jsonPath) {
      this.widgets = null;
      this.httpClient.get(this.jsonPath)
      .subscribe(
        (data) => {
          console.log(data);
          this.widgets = data;
        }
      );
    }
  }

  resetJson() {
    this.widgets =    {
      'widgets': [
        {
          'id': 1,
          'name': 'Blobex Corporation',
          'type': 'form',
          'items': [
            {
              'type': 'section',
              'header': 'Opportunity details',
              'columns': 2,
              'items': [
                {
                  'type': 'input',
                  'label': 'Opportunity name',
                  'value': 'Acme - 1200 Widgets (Sample)',
                  'required': true
                },
                {
                  'type': 'currency',
                  'label': 'Amount + currency',
                  'value': 146,
                  'symbol': 'EUR'
                },
                {
                  'type': 'currency',
                  'label': 'Another input',
                  'value': 140000.00,
                  'symbol': 'EUR',
                  'precision': 2
                }
              ]
            },


            {
              'type': 'section',
              'header': 'Second Section',
              'columns': 3,
              'items': [
                {
                  'type': 'input',
                  'label': 'First text',
                  'value': 'First value :)',
                  'required': true
                },
                {
                  'type': 'input',
                  'label': 'Second text',
                  'value': 'The currencyPipe does provide this possibility',
                  'required': true
                },
                {
                  'type': 'currency',
                  'label': 'Zero precision',
                  'value': 0,
                  'symbol': 'EUR'
                },
                {
                  'type': 'currency',
                  'label': 'USD, precision 2',
                  'value': 4500.00,
                  'symbol': 'USD',
                  'precision': 2
                }
              ]
            }






          ]
        }
      ]
    };

  }

  constructor(
    private httpClient: HttpClient
  ) {
    this.widgets =    {
      'widgets': [
        {
          'id': 1,
          'name': 'Blobex Corporation',
          'type': 'form',
          'items': [
            {
              'type': 'section',
              'header': 'Opportunity details',
              'columns': 2,
              'items': [
                {
                  'type': 'input',
                  'label': 'Opportunity name',
                  'value': 'Acme - 1200 Widgets (Sample)',
                  'required': true
                },
                {
                  'type': 'currency',
                  'label': 'Amount + currency',
                  'value': 146,
                  'symbol': 'EUR'
                },
                {
                  'type': 'currency',
                  'label': 'Another input',
                  'value': 140000.00,
                  'symbol': 'EUR',
                  'precision': 2
                }
              ]
            }
          ]
        }
      ]
    };

  }

}
