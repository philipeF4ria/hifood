import { hash } from 'bcryptjs';

import { UserRepository } from '../../repositories/UserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IRequest) {
    const userRepository = new UserRepository();
    
    if (!name || !email || !password) {
      throw new Error('All information is required');
    }

    const userAlreadyExists = await userRepository.findByEmail({ email });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = await userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserService }
