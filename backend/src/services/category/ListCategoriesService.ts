import { CategoryRepository } from '../../repositories/CategoryRepository';

class ListCategoriesService {
  async execute() {
    const categoryRepository = new CategoryRepository();

    const categories = await categoryRepository.listAll();

    return categories;
  }
}

export { ListCategoriesService };
