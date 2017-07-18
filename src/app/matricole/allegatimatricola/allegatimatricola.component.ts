import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allegatimatricola',
  templateUrl: './allegatimatricola.component.html',
  styleUrls: ['./allegatimatricola.component.scss']
})
export class AllegatimatricolaComponent implements OnInit {

  allegati: Object[] = [{
    name: 'Manuale.pdf',
    description: 'manuale istruzioni',
    icon: 'attach_file',
  }, {
    name: 'Ricambi.xlsx',
    description: 'Ricambi stampante',
    icon: 'attach_file',
  }, {
    name: 'Fattura.pdf',
    description: 'Fattura Luglio 2017',
    icon: 'attach_file',
  }, {
    name: 'Fattura.pdf',
    description: 'Fattura Giugno 2017',
    icon: 'attach_file',
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
