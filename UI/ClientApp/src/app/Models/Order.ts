import { User } from './User';
import { Product } from './Product';

export interface Order {
  orderID: number;
  orderDetails: OrderDetail[];
  userID: number;
  user: User;
}

export interface OrderDetail {
  orderDetailId: number;
  orderID: number;
  quantity: number;
  order: Order;
  productID: number;
  product: Product;
}