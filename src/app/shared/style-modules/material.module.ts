import { NgModule } from '@angular/core';
import {
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
      } from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ],
  declarations: []
})
export class MaterialModule { }
