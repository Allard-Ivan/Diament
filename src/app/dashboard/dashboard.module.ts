import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from './../shared/style-modules/material.module';
import { ProgressModule } from './../shared/style-modules/progress.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    MaterialModule,
    ProgressModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
