import { Request, Response } from 'express';

import { FinishOrderService } from '../../services/order/FinishOrderService';

class FinishOrderController {
  async handle(request: Request, response: Response) {
    const order_id = request.params.order_id as string;
  
    const finishOrderService = new FinishOrderService();

    const order = await finishOrderService.execute({ order_id });

    return response.json(order);
  }
}

export { FinishOrderController };
