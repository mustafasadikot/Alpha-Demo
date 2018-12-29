import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxNavBarModule } from 'devextreme-angular';
import { DxPieChartModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { DxSelectBoxModule,	DxFormModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { DxPolarChartModule } from 'devextreme-angular';
import { DxPopupModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialFlowComponent } from './material-flow/material-flow.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MaterialFlowComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxNavBarModule,
    DxPieChartModule,
    DxChartModule,
    DxDataGridModule,
    DxTemplateModule,
    DxSelectBoxModule,
    DxFormModule,
    DxPolarChartModule,
    DxPopupModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
