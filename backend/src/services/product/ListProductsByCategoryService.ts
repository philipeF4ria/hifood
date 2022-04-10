import prismaClient from '../../prisma';

interface IRequest {
  category_id: string;
}

class ListProductsByCategoryService {
  async execute({ category_id }: IRequest) {
    
    if (!category_id) {
      throw new Error('Category ID is required');
    }

    const products = await prismaClient.product.findMany({
      where: {
        category_id,
      },
    });

    return products;
  }
}

export { ListProductsByCategoryService };
