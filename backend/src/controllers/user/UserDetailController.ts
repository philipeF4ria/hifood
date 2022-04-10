import { Request, Response } from 'express';
import { UserDetailService } from '../../services/user/UserDetailService';

class UserDetailController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    
    const userDetailService = new UserDetailService();

    const user = await userDetailService.execute(user_id);

    return response.json(user);
  }
}

export { UserDetailController };
