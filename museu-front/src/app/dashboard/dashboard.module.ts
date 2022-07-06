import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTablesComponent } from './dashboard-tables/dashboard-tables.component';
import { DashboardChartsComponent } from './components/dashboard-charts/dashboard-charts.component';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';



@NgModule({
  declarations: [
    DashboardTablesComponent,
    DashboardChartsComponent,
    DashboardCardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
