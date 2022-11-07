import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap,map} from 'rxjs/operators';
import {CartService} from '../../services/cart.service';
import {CartModel} from "../../models/cart.model";
import {ProductInCartModel} from "../../models/product-in-cart.model";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDetailsComponent {
  readonly cart$: Observable<number> = this._activatedRoute.params.pipe(switchMap(data => this._cartService.getCart(data['id']).pipe(map((data:CartModel<ProductInCartModel[]>)=>{
    return data.products.length;
  }))));

  constructor(private _cartService: CartService, private _activatedRoute: ActivatedRoute) {
  }
}
