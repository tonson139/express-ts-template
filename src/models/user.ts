import { getRepository } from "typeorm";
import { User } from "./entity/User";

export class UserRepository {
	constructor() {
		this.user = getRepository(User);
	}

	async findAll() {
		const [users, count] = await this.user;
	}
}
