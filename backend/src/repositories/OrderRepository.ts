import prismaClient from '../prisma';

interface ICreate {
  table: number;
  name: string;
}

interface IDelete {
  order_id: string;
}

interface IUpdate {
  order_id: string;
}

class OrderRepository {
  async create({ table, name }: ICreate) {
    const order = await prismaClient.order.create({
      data: {
        table,
        name,
      }
    });

    return order;
  }

  async listAllOpen() {
    const orders = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    return orders;
  }

  async updateDraft({ order_id }: IUpdate) {
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

  async updateStatus({ order_id }: IUpdate) {
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

  async delete({ order_id }: IDelete) {
    await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });
  }
}

export { OrderRepository };
