import { NextApiRequest, NextApiResponse } from "next";
import { ResponseError } from "types/ResponseError";

type HttpVerb = 'POST' | 'GET';

export const protectVerb = <T>(verb: HttpVerb, req: NextApiRequest, res: NextApiResponse<T | ResponseError>) => {
    if (req.method !== verb as string) {
        res.status(405).json({success: false, message: `Error: The verb ${req.method} is not allowed for this endpoint. Try ${verb}.`});
        return false;
    }
    return true;
}