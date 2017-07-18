import { Component, OnInit } from '@angular/core';
import { single } from './data';


@Component({
  selector: 'app-anagraficaprincipale',
  templateUrl: './anagraficaprincipale.component.html',
  styleUrls: ['./anagraficaprincipale.component.scss']
})
export class AnagraficaprincipaleComponent implements OnInit {

  view: any[] = undefined;
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';

  colorScheme = {
    domain: ['#1565C0', '#2196F3', '#81D4FA', '#FF9800', '#EF6C00'],
  };

  single: any[];
  multi: any[];

  constructor() {
    // Chart
    Object.assign(this, {single})
  }

  ngOnInit() {
  }

}
