import prismaClient from '../../prisma';

interface IRequest {
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({ table, name }: IRequest) {
    const order = await prismaClient.order.create({
      data: {
        table,
        name,
      },
    });

    return order;
  }
}

export { CreateOrderService };
