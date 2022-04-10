import prismaClient from '../../prisma';

interface IRequest {
  order_id: string;
}

class SendOrderService {
  async execute({ order_id }: IRequest) {
    
    if (!order_id) {
      throw new Error('Order Id is required');
    }
    
    const order = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        draft: false,
      },
    });

    return order;
  }
}

export { SendOrderService };
