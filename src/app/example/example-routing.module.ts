import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoButtonIndicatorComponent } from './demo-button-indicator/demo-button-indicator.component';
import { DemoFormControlComponent } from './demo-form-control/demo-form-control.component';

const routes: Routes = [
    {
        path: '',
        component: DemoButtonIndicatorComponent
    },
    {
        path: 'demo-form-control',
        component: DemoFormControlComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExampleRoutingModule { }
