import { ProductRepository } from '../../repositories/ProductRepository';

interface IRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({ name, price, description, banner, category_id }: IRequest) {
    const productRepository = new ProductRepository();

    if (!name || !price || !description || !banner || !category_id) {
      throw new Error('All information is required');
    }

    const product = await productRepository.create({
      name,
      price,
      description,
      banner,
      category_id,
    });

    return product;
  }
}

export { CreateProductService };
