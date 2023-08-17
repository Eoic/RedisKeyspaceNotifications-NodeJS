import express from 'express';
import RedisRepo from './redis.repo.js';
import { RedisSetKeys } from './redis.set-keys.js';

const app = express();
RedisSetKeys();

app.get('/key-value', (req, res) => {
    const { key, value } = req.query;
    RedisRepo.setValue(key, value);
    res.send('OK');
});

app.listen(9000, () => console.log('Server started...'));
