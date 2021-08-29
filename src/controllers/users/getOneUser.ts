import type { Request, Response } from "express";
import { responseHandler } from "../../helpers/responseHandler";
import { getRepository } from "typeorm";
import { User } from "../../models/entity/User";

export const getOneUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { id } = req.params;

	const userRepository = getRepository(User);
	const [users, count] = await userRepository.findByIds([id]);

	let responseData = {
		data: [users],
		count: [users].length,
	};

	return responseHandler(res, responseData, 200);
};
