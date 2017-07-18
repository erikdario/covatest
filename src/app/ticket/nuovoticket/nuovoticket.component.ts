import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {TdMediaService} from "@covalent/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-nuovoticket',
  templateUrl: './nuovoticket.component.html',
  styleUrls: ['./nuovoticket.component.scss']
})
export class NuovoticketComponent implements AfterViewInit, OnInit {

  items: Object[];

  stateCtrl: FormControl;
  filteredStates: any;

  // matricole = [{
  //   codice: '1111',
  //   descrizione: 'Matricola 1',
  // }, {
  //   codice: '2222',
  //   descrizione: 'Matricola 2',
  // },{
  //   codice: '3333',
  //   descrizione: 'Matricola 3',
  // },
  // ];

  // matricole = ['1111 - Matricola 1',
  //  '2222 - Matricola 2',
  //  '3333 - Matricola 3',];

  states = ['Matricola Cod. 1111', 'Matricola Cod. 2222', 'Matricola Cod. 3333'];


  favoriteSeason: string;
  tipiInterventi = [
    'Malfunzinamento Dispositivo',
    'Richiesta Intervento Straordinario',
    'Richiesta Ritiro',
  ];

  constructor(private _titleService: Title,
    private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) >= 0)
      : this.states;
  }

  ngOnInit(): void {
    this._titleService.setTitle( 'Nuovo Ticket' );

}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
  // force a new change detection cycle since change detections
  // have finished when `ngAfterViewInit` is executed
  this._changeDetectorRef.detectChanges();
}

}

