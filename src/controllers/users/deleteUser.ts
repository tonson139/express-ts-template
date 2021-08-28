import type { Request, Response } from "express";

export const deleteUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	console.log("deleteUSer");
	const mockdata = `This is deleteUser id: ${req.params.id}`;
	return res.status(200).json({
		data: mockdata,
	});
};
