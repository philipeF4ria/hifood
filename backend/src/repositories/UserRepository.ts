import prismaClient from '../prisma';

interface IFindByEmail {
  email: string;
}

interface ICreate {
  name: string;
  email: string;
  password: string;
}

interface IFindById {
  id: string;
}

class UserRepository {
  async findByEmail({ email }: IFindByEmail) {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }

  async create({ name, email, password }: ICreate) {
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }

  async findById({ id }: IFindById) {
    const user = await prismaClient.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { UserRepository };
