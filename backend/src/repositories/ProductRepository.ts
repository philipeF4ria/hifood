import prismaClient from '../prisma';

interface ICreate {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

interface IListByCategoryId {
  id: string;
}

class ProductRepository {
  async create({
    name,
    price,
    description,
    banner,
    category_id,
  }: ICreate) {
    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        description,
        banner,
        category_id,
      },
    });

    return product;
  }

  async listByCategoryId({ id }: IListByCategoryId) {
    const products = await prismaClient.product.findMany({
      where: {
        category_id: id,
      },
    });

    return products;
  }
}

export { ProductRepository };
