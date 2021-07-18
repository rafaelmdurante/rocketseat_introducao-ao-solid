import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const duplicate = this.usersRepository.findByEmail(email);
    if (duplicate) {
      throw new Error("Email already been taken");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
