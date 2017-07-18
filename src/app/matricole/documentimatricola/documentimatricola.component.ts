import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-documentimatricola',
  templateUrl: './documentimatricola.component.html',
  styleUrls: ['./documentimatricola.component.scss']
})
export class DocumentimatricolaComponent implements OnInit {

  title:string;

  constructor(private _titleService: Title) { }

  ngOnInit() {
    this._titleService.setTitle( 'Documenti' );
    this.title = this._titleService.getTitle();
  }

}
