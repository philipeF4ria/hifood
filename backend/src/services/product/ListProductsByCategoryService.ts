import { ProductRepository } from '../../repositories/ProductRepository';

interface IRequest {
  category_id: string;
}

class ListProductsByCategoryService {
  async execute({ category_id }: IRequest) {
    const productRepository = new ProductRepository();

    if (!category_id) {
      throw new Error('Category ID is required');
    }

    const products = await productRepository.listByCategoryId({ 
      id: category_id,
    });
  
    return products;
  }
}

export { ListProductsByCategoryService };
