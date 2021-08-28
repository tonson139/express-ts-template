import type { Request, Response } from "express";

export const getOneUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	console.log("getOneUser");
	for (let x in req.params) {
		console.log(x);
	}
	const mockdata = `This is getOneuse id: ${req.params.id}`;
	return res.status(200).json({
		data: mockdata,
	});
};
