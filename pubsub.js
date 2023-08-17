import Redis from 'ioredis';

const db = 0;
const port = 6379;
const host = 'localhost';

const subscriber = new Redis({ host, port, db });

export default new class PubSub {
    subscribe(channel) {
        subscriber.subscribe(channel);
    }

    on(event, callback) {
        subscriber.on(event, (channel, message) => {
            callback(channel, message);
        });
    }
}
