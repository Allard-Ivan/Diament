import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-control',
  templateUrl: './demo-form-control.component.html',
  styleUrls: ['./demo-form-control.component.scss']
})
export class DemoFormControlComponent implements OnInit {

  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
  ];

  constructor() { }

  ngOnInit() {
  }

}
