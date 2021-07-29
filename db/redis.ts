import Redis from "ioredis";

type ObjType = 'string' | 'map';

const redis: Redis.Redis = new Redis(process.env.REDIS_URL);
export const get = (key: string, objType: ObjType, callback: (err: Error | null, value: any) => void) => {
    if (redis !== null) {
        if (objType === 'map') {
            redis.hgetall(key, (err, value) => { callback(err, value); });
        } else {
            redis.get(key, (err, value) => { callback(err, value); });
        }
    } else {
        callback(new Error('No Redis Instance'), null);
    }
}

export const set = (key: string, value: any) => {
    if (redis !== null) {
        if (typeof value === 'string') {
            redis.set(key, value);
        } else if (value === null) {
            redis.del(key);
        } else if (typeof value === 'object') {
            redis.hmset(key, value);
        }
    }
}

export default redis;