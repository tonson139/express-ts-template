import type { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";
import { responseHandler } from "../../helper/responseHandler";

export const getAllUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userRepository = getRepository(User);
	const [users, count] = await userRepository.findAndCount();

	let responseData = {
		data: users,
		count,
	};

	return responseHandler(res, responseData, 200);
};
