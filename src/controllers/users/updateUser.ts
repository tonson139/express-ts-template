import type { Request, Response } from "express";

export const updateUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	console.log("updateUser");
	const mockdata = `This is updateUser id: ${req.params.id}`;
	return res.status(200).json({
		data: mockdata,
	});
};
