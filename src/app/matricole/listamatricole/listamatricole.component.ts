import { Component} from '@angular/core';
import { PlatformLocation } from '@angular/common'

import {
  TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn,
  TdLoadingService
} from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';

import {MatricoleService} from "../services/matricole.service";

@Component({
  selector: 'app-listamatricole',
  templateUrl: './listamatricole.component.html',
  styleUrls: ['./listamatricole.component.scss'],
  viewProviders: [ MatricoleService ],
})
export class ListamatricoleComponent {
columns: ITdDataTableColumn[] = [
  { name: '#', label: '#' },
  { name: 'CodiceMatricola', label: 'Cod.Matricola' },
  { name: 'Articolo', label: 'Articolo' },
  { name: 'Descrizione', label: 'Descrizione', filter: true },
  { name: 'DataInizioGaranzia', label: 'Data Inizio Garanzia', filter: true },
  { name: 'DataFineGaranzia', label: 'Data Fine Garanzia', filter: true },
];

matricoleResult: any[] = [];
filteredData: any[] = this.matricoleResult;
filteredTotal: number = this.matricoleResult.length;
searchTerm: string = '';
fromRow: number = 1;
currentPage: number = 1;
pageSize: number = 5;
sortBy: string = 'CodiceMatricola';
selectedRows: any[] = [];
sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
gridMatricoleVisible: boolean = true;

constructor(private _dataTableService: TdDataTableService,
            private _matricoleService: MatricoleService,
            private _loadingService: TdLoadingService,
            private _location: PlatformLocation) {

  this._loadingService.register('matricole.load');

  this._matricoleService.getMatricole()
    .subscribe(
        res => {
          this.matricoleResult = res;
          this.filteredData = res;
          this._loadingService.resolve('matricole.load');
      } ,
      err => {
        // Log errors if any
        console.log(err);
        this._loadingService.resolve('matricole.load');
      }
      );

  _location.onPopState(() => {

    this.gridMatricoleVisible = !this.gridMatricoleVisible

  });

}


ngOnInit(): void {
  this.filter();
}

sort(sortEvent: ITdDataTableSortChangeEvent): void {
  this.sortBy = sortEvent.name;
this.sortOrder = sortEvent.order;
this.filter();
}

search(searchTerm: string): void {
  this.searchTerm = searchTerm;
this.filter();
}

page(pagingEvent: IPageChangeEvent): void {
  this.fromRow = pagingEvent.fromRow;
this.currentPage = pagingEvent.page;
this.pageSize = pagingEvent.pageSize;
this.filter();
}

filter(): void {
  let newData: any[] = this.matricoleResult;
let excludedColumns: string[] = this.columns
  .filter((column: ITdDataTableColumn) => {
    return ((column.filter === undefined && column.hidden === true) ||
    (column.filter !== undefined && column.filter === false));
  }).map((column: ITdDataTableColumn) => {
    return column.name;
  });
newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
this.filteredTotal = newData.length;
newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
this.filteredData = newData;
}

  hideGridMatricole(event){
    this.gridMatricoleVisible = false;
  }

}
