import { OrderRepository } from '../../repositories/OrderRepository';

interface IRequest {
  order_id: string;
}

class FinishOrderService {
  async execute({ order_id }: IRequest) {

    const orderRepository = new OrderRepository();

    if (!order_id) {
      throw new Error('Order ID is required');
    }

    const order = await orderRepository.updateStatus({ order_id });

    return order;
  }
}

export { FinishOrderService };
