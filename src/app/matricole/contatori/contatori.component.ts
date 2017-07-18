import { Component, OnInit } from '@angular/core';
import {copieBn, copieColore} from './data';

@Component({
  selector: 'app-contatori',
  templateUrl: './contatori.component.html',
  styleUrls: ['./contatori.component.scss']
})
export class ContatoriComponent implements OnInit {

  copieBn: any[];
  copieColore: any[];

  colorScheme = {
    domain: ['#1565C0', '#2196F3', '#81D4FA', '#FF9800', '#EF6C00'],
  };

  // line, area
  autoScale = true;

  constructor() {
    Object.assign(this, {copieBn})
    Object.assign(this, {copieColore})
  }

  ngOnInit() {
  }

}
