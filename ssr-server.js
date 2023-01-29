const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mongoose = require('mongoose');
const connectOption = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

require('dotenv').config();

mongoose.connect(process.env.key, connectOption);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', () => console.log('DB connection successful'));
const dailySchema = require('./model/dailySchema');
const Daily = mongoose.model('daily', dailySchema, 'daily');

app.prepare()
    .then(() => {
        const server = express()
        server.use(express.json());

        server.get('/index/get', async (req, res) => {
            const dailys = await Daily.find({});
            res.json(dailys);
        });

        server.post('/addDaily/post', async (req, res) => {
            const daily = new Daily({
                title: req.body.title,
                content: req.body.content,
                created: Date.now(),
            });
            const sevedDaily = await daily.save();

            return app.render(req, res, '/addDaily', req.query)
        });

        server.post('/deleteDaily/post:id', async (req, res) => {
            const
                id = req.body.id,
                deletedDaily = await Daily.findByIdAndDelete(id);

            return app.render(req, res, '/deleteDaily', req.query)
        });

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })