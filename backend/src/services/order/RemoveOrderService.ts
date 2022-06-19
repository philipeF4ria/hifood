import { OrderRepository } from '../../repositories/OrderRepository';

interface IRequest {
  id: string;
}

class RemoveOrderService {
  async execute({ id }: IRequest) {
    const orderRepository = new OrderRepository();

    await orderRepository.delete({ order_id: id });

    return;
  }
}

export { RemoveOrderService };
