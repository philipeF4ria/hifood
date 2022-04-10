import { Request, Response } from 'express';

import { RemoveOrderService } from '../../services/order/RemoveOrderService';

class RemoveOrderController {
  async handle(request: Request, response: Response) {
    const order_id = request.params.order_id as string;
    
    const removeOrderService = new RemoveOrderService();

    await removeOrderService.execute({ id: order_id });

    return response.sendStatus(200);
  }
}

export { RemoveOrderController };
