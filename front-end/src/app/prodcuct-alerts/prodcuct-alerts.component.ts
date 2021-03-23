import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-prodcuct-alerts',
  templateUrl: './prodcuct-alerts.component.html',
  styleUrls: ['./prodcuct-alerts.component.css']
})
export class ProdcuctAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}
