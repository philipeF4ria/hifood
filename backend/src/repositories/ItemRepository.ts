import prismaClient from '../prisma';

interface ICreate {
  order_id: string;
  product_id: string;
  amount: number;
}

interface IDetails {
  order_id: string;
}

class ItemRepository {
  async create({ order_id, product_id, amount }: ICreate) {
    const item = await prismaClient.item.create({
      data: {
        order_id,
        product_id,
        amount,
      },
    });

    return item;
  }

  async details({ order_id }: IDetails) {
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

export { ItemRepository };
