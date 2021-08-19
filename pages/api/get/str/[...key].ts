// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { protectAttributes } from 'middleware/protectAttributes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { get } from '../../../../db/redis';
import { protectVerb } from '../../../../middleware/protectVerb';

type Data = {
    success: boolean
    key?: string
    value?: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {
    if (protectVerb('GET', req, res)) {
        return new Promise(resolve => {
            const key = req.query.key[0] as string;
            get(key, 'string', (err: Error | null, value: string | null) => {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json({ 
                        success: true, 
                        key, 
                        value, 
                    });
                }
                resolve(true);
            });
        })
    }
}
