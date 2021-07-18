import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const user_id = <string>request.headers?.user_id;

    let users = null;
    try {
      users = this.listAllUsersUseCase.execute({ user_id });
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }

    return response.send(users);
  }
}

export { ListAllUsersController };
