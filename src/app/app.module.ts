import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { AppComponent } from './app.component';
import { RequestInterceptor } from '../config/interceptors/request.interceptor';
import { MOCK_API } from '../config/api.config';

import { routedComponents, AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { USER_PROVIDER, USERS_API } from './users';
import { NuovoticketComponent } from './ticket/nuovoticket/nuovoticket.component';
import { ListamatricoleComponent } from './matricole/listamatricole/listamatricole.component';
import { SchedamatricolaComponent } from './matricole/schedamatricola/schedamatricola.component';
import { AnagraficaprincipaleComponent } from './matricole/anagraficaprincipale/anagraficaprincipale.component';
import { AllegatimatricolaComponent } from './matricole/allegatimatricola/allegatimatricola.component';
import { DocumentimatricolaComponent } from './matricole/documentimatricola/documentimatricola.component';
import { ContatoriComponent } from './matricole/contatori/contatori.component';
import {MdAutocomplete, MdAutocompleteModule, MdRadioModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";

const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

export function getAPI(): string {
  return MOCK_API;
}

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    NuovoticketComponent,
    ListamatricoleComponent,
    SchedamatricolaComponent,
    AnagraficaprincipaleComponent,
    AllegatimatricolaComponent,
    DocumentimatricolaComponent,
    ContatoriComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdRadioModule,
    MdAutocompleteModule,
    ReactiveFormsModule,
    SharedModule,
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentHighlightModule,
    CovalentMarkdownModule,
  ], // modules needed to run this module
  providers: [
    httpInterceptorProviders,
    Title, {
      provide: USERS_API, useFactory: getAPI,
    }, USER_PROVIDER,
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
