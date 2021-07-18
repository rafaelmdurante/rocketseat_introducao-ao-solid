import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { name, email } = request.body;

    let user = null;
    try {
      user = this.createUserUseCase.execute({ name, email });
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }

    return response.status(201).send(user);
  }
}

export { CreateUserController };
