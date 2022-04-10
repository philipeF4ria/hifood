import prismaClient from '../../prisma';

interface IRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({ name, price, description, banner, category_id }: IRequest) {
    
    if (!banner) {
      throw new Error('Banner is required');
    }

    const product = await prismaClient.product.create({
     data: {
       name,
       price,
       description,
       banner,
       category_id,
     }
    });

    return product;
  }
}

export { CreateProductService };
