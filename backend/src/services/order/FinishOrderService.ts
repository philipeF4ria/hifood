import prismaClient from '../../prisma';

interface IRequest {
  order_id: string;
}

class FinishOrderService {
  async execute({ order_id }: IRequest) {

    if (!order_id) {
      throw new Error('Order ID is required');
    }

    const order = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,  
      },
    });

    return order;
  }
}

export { FinishOrderService };
