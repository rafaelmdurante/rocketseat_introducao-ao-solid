import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;

    let user;
    try {
      user = this.turnUserAdminUseCase.execute({ user_id });
    } catch (err) {
      return response.status(404).json({ error: err }).send();
    }

    return response.status(200).send(user);
  }
}

export { TurnUserAdminController };
