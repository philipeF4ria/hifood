import { ItemRepository } from '../../repositories/ItemRepository';

interface IRequest {
 order_id: string;
 product_id: string;
 amount: number;
}

class AddItemService {
  async execute({ order_id, product_id, amount }: IRequest) {
    const itemRepository = new ItemRepository();
    
    const order = await itemRepository.create({
      order_id,
      product_id,
      amount,
    });

    return order;
  }
}

export { AddItemService };
