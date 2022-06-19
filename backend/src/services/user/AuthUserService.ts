import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { UserRepository } from '../../repositories/UserRepository';

interface IRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: IRequest) {
    const userRepository = new UserRepository();
    
    const user = await userRepository.findByEmail({ email });
    
    if (!user) {
      throw new Error('User/password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('User/password incorrect');
    }

    const token = sign({
        name: user.name,
        email: user.email,
      }, 
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      },
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  }
}

export { AuthUserService };
