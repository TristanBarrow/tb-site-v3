import { NextApiRequest, NextApiResponse } from "next";
import { ResponseError } from "types/ResponseError";

export const protectArray = <T>(req: NextApiRequest, res: NextApiResponse<T | ResponseError>) => {
    if (!Array.isArray(req.body)) {
        res.status(405).json({success: false, message: `Error: This endpoint requires the body to be an array`});
        return false;
    }
    return true;
}