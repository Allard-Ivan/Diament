import { Component, OnInit } from '@angular/core';

// Import BlockUI decorator & optional NgBlockUI type
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Decorator wires up blockUI instance
  @BlockUI('btn-list') blockUI: NgBlockUI;

  constructor() {
    this.blockUI.start('爆炸了'); // Start blocking

    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 2000);
   }

  ngOnInit() {
  }

}
