import { OrderRepository } from '../../repositories/OrderRepository';
interface IRequest {
  order_id: string;
}

class SendOrderService {
  async execute({ order_id }: IRequest) {
    const orderRepository = new OrderRepository();

    if (!order_id) {
      throw new Error('Order Id is required');
    }
    
    const order = await orderRepository.updateDraft({ order_id });

    return order;
  }
}

export { SendOrderService };
