import PubSub from './pubsub.js';
import RedisRepo from './redis.repo.js';

const RedisSetKeys = () => {
    PubSub.subscribe('__keyevent@0__:set');
    PubSub.on('message', async (channel, message) => {
        console.table({
            channel,
            message,
            value: await RedisRepo.get(message)
        });

        console.log('---');
    });
};

export { RedisSetKeys };
