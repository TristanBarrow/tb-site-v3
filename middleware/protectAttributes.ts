import { NextApiRequest, NextApiResponse } from "next";
import { ResponseError } from "types/ResponseError";

export const protectAttributes = <T>(attrs: string[], req: NextApiRequest, res: NextApiResponse<T | ResponseError>) => {
    if (!attrs.map(attr => req.body.hasOwnProperty(attr)).reduce((acc, cur) => acc && cur)) {
        res.status(405).json({success: false, message: `Error: This endpoint requires the attributes [${attrs.toString()}].`});
        return false;
    }
    return true;
}