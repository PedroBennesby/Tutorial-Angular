import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: IProduct = { price: 0 };
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
