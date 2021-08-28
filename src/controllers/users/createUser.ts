import type { Request, Response } from "express";

export const createUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	console.log("createUser");
	const mockdata = `This is createUser`;
	return res.status(200).json({
		data: mockdata,
	});
};
