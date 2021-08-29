import type { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../models/entity/User";
import { responseHandler } from "../../helpers/responseHandler";

export const updateUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userRepository = getRepository(User);

	const { id } = req.params;
	const updatedUser = req.body;

	await userRepository.update(id, updatedUser);
	const [users, count] = await userRepository.findByIds([id]);

	let responseData = {
		data: [users],
		count: [users].length,
	};

	return responseHandler(res, responseData, 200);
};
