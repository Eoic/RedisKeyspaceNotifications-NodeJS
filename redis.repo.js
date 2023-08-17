import Redis from 'ioredis';

const db = 0;
const port = 6379;
const host = 'localhost';

export default new class RedisRepo {
    constructor() {
        this.redis = new Redis({ host, port, db });
        this.redis.on('ready', () => this.redis.config('SET', 'notify-keyspace-events', 'KEA'));
    }

    get(key) {
        return this.redis.get(key);
    }

    setValue(key, value) {
        this.redis.set(key, value);
    }
};