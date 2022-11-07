import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CartModel} from '../models/cart.model';
import {ProductInCartModel} from "../models/product-in-cart.model";

@Injectable()
export class CartService {
  constructor(private _httpClient: HttpClient) {
  }

  getCart(id: string): Observable<CartModel<ProductInCartModel[]>> {
    return this._httpClient.get<CartModel<ProductInCartModel[]>>('https://fakestoreapi.com/carts/' + id);
  }
}
