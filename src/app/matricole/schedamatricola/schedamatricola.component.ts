import {ActivatedRoute} from "@angular/router";
import { Component, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { TdLoadingService, TdMediaService } from '@covalent/core';
import {MatricoleService} from "../services/matricole.service";

@Component({
  selector: 'app-schedamatricola',
  templateUrl: './schedamatricola.component.html',
  styleUrls: ['./schedamatricola.component.scss']
})
export class SchedamatricolaComponent implements AfterViewInit, OnInit {

  items: Object[];
  matricola: string;

  routes: Object[] = [{
    title: 'Anagrafica',
    route: 'anagrafica',
    icon: 'assignment',
  }, {
    title: 'Allegati',
    route: 'allegati',
    icon: 'attach_file',
  }, {
    title: 'Documenti',
    route: 'documenti',
    icon: 'folder_open',
  }, {
    title: 'Contatori',
    route: 'contatori',
    icon: 'assessment',
  },
  ];

  title: string;

  constructor(private _titleService: Title,
              private _loadingService: TdLoadingService,
              private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService,
              private _route: ActivatedRoute) {

  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    // force a new change detection cycle since change detections
    // have finished when `ngAfterViewInit` is executed
    this._changeDetectorRef.detectChanges();
  }

  ngOnInit() {
    this._titleService.setTitle( 'Product Dashboard' );
    this.title = this._titleService.getTitle();

    this._loadingService.register('items.load');

    this._route.params.subscribe((params: {id: string}) => {
      this.matricola = params['id'];
    });
  }

}
