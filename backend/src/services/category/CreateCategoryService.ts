import { CategoryRepository } from '../../repositories/CategoryRepository';

interface IRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: IRequest) {
    
    if (!name) {
      throw new Error('Name is required');
    }

    const categoryRepository = new CategoryRepository();

    const category = await categoryRepository.create({ name });

    return category;
  }
}

export { CreateCategoryService };
