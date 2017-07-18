import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { ProductOverviewComponent } from './dashboard-product/overview/overview.component';
import { ProductStatsComponent } from './dashboard-product/stats/stats.component';
import { ProductFeaturesComponent } from './dashboard-product/features/features.component';
import { FeaturesFormComponent } from './dashboard-product/features/form/form.component';
import { LogsComponent } from './logs/logs.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import {NuovoticketComponent} from "./ticket/nuovoticket/nuovoticket.component";
import {ListamatricoleComponent} from "./matricole/listamatricole/listamatricole.component";
import {SchedamatricolaComponent} from "./matricole/schedamatricola/schedamatricola.component";
import {AllegatimatricolaComponent} from "./matricole/allegatimatricola/allegatimatricola.component";
import {AnagraficaprincipaleComponent} from "./matricole/anagraficaprincipale/anagraficaprincipale.component";
import {DocumentimatricolaComponent} from "./matricole/documentimatricola/documentimatricola.component";
import {ContatoriComponent} from "./matricole/contatori/contatori.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                component: DashboardComponent,
                path: '',
            },
            {
                path: 'product',
                component: DashboardProductComponent,
                children: [
                    {
                        path: '',
                        component: ProductOverviewComponent
                    },
                    {
                        path: 'stats',
                        component: ProductStatsComponent
                    },
                    {
                        path: 'features',
                        children: [
                            {
                                path: '',
                                component: ProductFeaturesComponent
                            },
                            {
                                path: 'add',
                                component: FeaturesFormComponent
                            },
                            {
                                path: ':id/delete',
                                component: FeaturesFormComponent
                            },
                            {
                                path: ':id/edit',
                                component: FeaturesFormComponent
                            },
                        ]
                    },
                ]
            },
            {
                path: 'item/:id',
                component: DetailComponent
            },
            {
                path: 'logs',
                component: LogsComponent
            },
            {
                path: 'form',
                component: FormComponent
            },
            {
              component: NuovoticketComponent,
              path: 'nuovoticket'
            },
            {
              component: ListamatricoleComponent,
              path: 'listamatricole',
              children: [
                {
                  path: 'schedamatricola/:id',
                  component: SchedamatricolaComponent,
                  children: [
                    {
                      path: '',
                      component: AnagraficaprincipaleComponent
                    },
                    {
                      path: 'anagrafica',
                      component: AnagraficaprincipaleComponent
                    },
                    {
                      path: 'allegati',
                      component: AllegatimatricolaComponent
                    },
                    {
                      path: 'documenti',
                      component: DocumentimatricolaComponent
                    },
                    {
                      path: 'contatori',
                      component: ContatoriComponent
                    },
                  ]
                },
              ]
            },
            {
              component: DashboardComponent,
              path: '',
            },
            { path: '', loadChildren: './users/users.module#UsersModule' },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
    MainComponent, LoginComponent,
    DashboardComponent, DashboardProductComponent,
    FormComponent, LogsComponent, DetailComponent,
    FeaturesFormComponent, ProductFeaturesComponent, ProductOverviewComponent, ProductStatsComponent,
];
