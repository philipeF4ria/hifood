import { ItemRepository } from '../../repositories/ItemRepository';

interface IRequest {
  order_id: string;
}

class OrderDetailsService {
  async execute({ order_id }: IRequest) {
    const itemRepository = new ItemRepository();

    if (!order_id) {
      throw new Error('Order ID is required');
    }

    const order = await itemRepository.details({ order_id });

    return order;
  }
}

export { OrderDetailsService };
