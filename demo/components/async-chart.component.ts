import {
  Component
} from '@angular/core';

import {
  ChartType
} from '../../src/chartist.component';

const data: any = require('../data.json');

@Component({
  selector: 'async-chart',
  template: `
    <h4>Async</h4>
    <x-chartist
      [data]="data"
      [type]="type">
    </x-chartist>
  `
})
class AsyncChartComponent {
  data: Promise<Chartist.IChartistData>;
  type: Promise<ChartType>;

  constructor() {
    // simulate slow API call
    this.data = new Promise(function(resolve: any): void {
      setTimeout(function(): void {
        resolve(data['Pie']);
      }, 5000);
    });

    this.type = new Promise(function(resolve: any): void {
      setTimeout(function(): void {
        resolve('Pie');
      }, 5000);
    });
  }
}

export {
  AsyncChartComponent
};
