import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [{
      title: 'Home',
      route: '/',
      icon: 'home',
    }, {
      title: 'Matricole',
      route: '/listamatricole',
      icon: 'view_quilt',
    }, {
      title: 'Ticket',
      route: '/nuovoticket',
      icon: 'receipt',
    }, {
      title: 'Configurazioni',
      route: '/users',
      icon: 'people',
    },
  ];

  constructor(private _router: Router) {}

  logout(): void {
    this._router.navigate(['/login']);
  }
}
