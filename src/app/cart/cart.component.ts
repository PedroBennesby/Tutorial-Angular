import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: IProduct[] = this.CartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    adress: '',
  });

  constructor(
    private CartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.items = this.CartService.clearCart();
    console.warn('Your order has been Submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit() {}
}
