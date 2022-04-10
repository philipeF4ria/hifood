import { Request, Response } from 'express';
import { 
  ListProductsByCategoryService
} from '../../services/product/ListProductsByCategoryService';

class ListProductsByCategoryController {
  async handle(request: Request, response: Response) {
    const category_id = request.query.category_id as string;

    const listProductsByCategoryService = new ListProductsByCategoryService();

    const products = await listProductsByCategoryService.execute({ category_id });

    return response.json(products);
  }
}

export { ListProductsByCategoryController };
