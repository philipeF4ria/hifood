import { OrderRepository } from '../../repositories/OrderRepository';

class ListOrdersService {
  async execute() {
    const orderRepository = new OrderRepository();

    const orders = await orderRepository.listAllOpen();

    return orders;
  }
}

export { ListOrdersService };
