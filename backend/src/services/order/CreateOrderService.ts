import { OrderRepository } from '../../repositories/OrderRepository';

interface IRequest {
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({ table, name }: IRequest) {
    const orderRepository = new OrderRepository();
    
    const order = await orderRepository.create({
      table,
      name,
    });
    
    return order;
  }
}

export { CreateOrderService };
