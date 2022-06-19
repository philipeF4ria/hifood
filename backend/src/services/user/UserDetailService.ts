import { UserRepository } from '../../repositories/UserRepository';

class UserDetailService {
  async execute(user_id: string) {
    const userRepository = new UserRepository();

    const user = await userRepository.findById({ id: user_id });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}

export { UserDetailService };
