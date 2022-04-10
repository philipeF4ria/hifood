import { Request, Response } from 'express';

import { OrderDetailsService } from '../../services/order/OrderDetailsService';

class OrderDetailsController {
  async handle(request: Request, response: Response) {
    const order_id = request.params.order_id as string;

    const orderDetailsService = new OrderDetailsService();

    const orders = await orderDetailsService.execute({ order_id });

    return response.json(orders);
  }
}

export { OrderDetailsController };
