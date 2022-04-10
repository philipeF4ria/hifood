import prismaClient from '../../prisma';

interface IRequest {
  id: string;
}

class RemoveOrderService {
  async execute({ id }: IRequest) {
    await prismaClient.order.delete({
      where: {
        id,
      },
    });

    return;
  }
}

export { RemoveOrderService };
