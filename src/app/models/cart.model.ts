export interface CartModel<T> {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  readonly products: T;
}
