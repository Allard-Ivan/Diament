import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExampleRoutingModule } from './example-routing.module';
import { MaterialModule } from './../shared/style-modules/material.module';

import { DemoButtonIndicatorComponent } from './demo-button-indicator/demo-button-indicator.component';
import { DemoFormControlComponent } from './demo-form-control/demo-form-control.component';

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DemoButtonIndicatorComponent,
    DemoFormControlComponent
  ]
})
export class ExampleModule { }
