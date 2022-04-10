import prismaClient from '../../prisma';

interface IRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: IRequest) {
    
    if (!name) {
      throw new Error('Name is required');
    }

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
}

export { CreateCategoryService };
