import { Request, Response, NextFunction } from "express";

export const consoleLogger = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log(`LOG: ${req.method} ${req.path}`);
	next();
};
