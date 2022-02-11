import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export class ListUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.find({
      select: ["id", "name", "admin"]
    })

    return user;
  }
}