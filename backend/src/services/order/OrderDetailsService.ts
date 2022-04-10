import prismaClient from '../../prisma';

interface IRequest {
  order_id: string;
}

class OrderDetailsService {
  async execute({ order_id }: IRequest) {

    if (!order_id) {
      throw new Error('Order ID is required');
    }

    const order = await prismaClient.item.findFirst({
      where: {
        order_id,
      },
      include: {
        product: true,
        order: true,
      },
    });

    return order;
  }
}

export { OrderDetailsService };
