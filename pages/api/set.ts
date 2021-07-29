// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { protectAttributes } from 'middleware/protectAttributes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { set } from '../../db/redis';
import { protectVerb } from '../../middleware/protectVerb';

type Data = {
    success: boolean
    message: string
}

const attrs = ['key', 'value'];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (protectVerb('POST', req, res) && protectAttributes(attrs, req, res)) {
        const key = req.body.key;
        const value = req.body.value;
        set(key, value);
        res.status(200).json({success: true, message: `The database was updated with (${key}, ${value}).`});
    }
}
