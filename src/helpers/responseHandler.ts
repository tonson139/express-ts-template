import type { Response } from "express";
import { RESPONSE_CODE, RESPONSE_STATUS } from "../constants/reponse";

export const responseHandler = (res: Response, responseData, type) => {
	switch (type) {
		case RESPONSE_CODE.INTERNAL_SERVER_ERROR:
			return res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).json({
				error: {
					code: RESPONSE_CODE.INTERNAL_SERVER_ERROR,
					message: RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
				},
			});

		case RESPONSE_CODE.NOT_FOUND:
			return res.status(RESPONSE_CODE.NOT_FOUND).json({
				error: {
					code: RESPONSE_CODE.NOT_FOUND,
					message: RESPONSE_STATUS.NOT_FOUND,
				},
			});

		case RESPONSE_CODE.UNAUTHORIZED:
			return res.status(RESPONSE_CODE.UNAUTHORIZED).json({
				error: {
					code: RESPONSE_CODE.UNAUTHORIZED,
					message: RESPONSE_STATUS.UNAUTHORIZED,
				},
			});

		case RESPONSE_CODE.BAD_REQUEST:
			return res.status(RESPONSE_CODE.BAD_REQUEST).json({
				error: {
					code: RESPONSE_CODE.BAD_REQUEST,
					message: RESPONSE_STATUS.BAD_REQUEST,
				},
			});

		case RESPONSE_CODE.CREATED:
			return res.status(RESPONSE_CODE.CREATED).json({
				...responseData,
			});

		case RESPONSE_CODE.OK:
			return res.status(RESPONSE_CODE.OK).json({
				...responseData,
			});
	}
};
