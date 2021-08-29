import type { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../models/entity/User";
import { responseHandler } from "../../helpers/responseHandler";

export const createUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userRepository = getRepository(User);
	let user = new User();
	let { firstName, lastName, nickName } = req.body;

	user.firstName = firstName;
	user.lastName = lastName;
	user.nickName = nickName;
	user.createdBy = "SYSTEM";

	const responseData = await userRepository.save(user);

	return responseHandler(res, responseData, 201);
};
