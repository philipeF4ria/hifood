import prismaClient from '../prisma';

interface ICreateCategory {
  name: string;
}

class CategoryRepository {
  async create({ name }: ICreateCategory) {
    const category = await prismaClient.category.create({
      data: {
        name,
      },
      select: {
        name: true,
        id: true,
      },
    });

    return category;
  }

  async listAll() {
    const categories = await prismaClient.category.findMany();

    return categories;
  }
}

export { CategoryRepository }
