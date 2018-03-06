const http = require('http');
const Bundle = require('bono');
// const serve = require('koa-static');
const normMiddleware = require('bono-norm/middleware');
const auth = require('bono-auth');

const Api = require('./api');
const AuthBundle = require('./auth');
const config = require('./config');
const secret = 'secret123';

const PORT = process.env.PORT || 3000;

let app = new Bundle();
const api = new Api(config.diskdb);

/* no needed yet */
// app.use(serve(require('path').resolve(__dirname) + '/www/'));
app.use(require('kcors')());
app.use(normMiddleware(config.diskdb));
app.use(require('bono/middlewares/json')());
api.use(auth.authenticate());

app.get('/', ctx => 'Welkom');
app.bundle('/api', api);
app.bundle('/auth', new AuthBundle({ auth, secret }));

let server = http.Server(app.callback());
server.listen(PORT, () => console.info(`Listening on port ${PORT}`));
