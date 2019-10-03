const Koa = require('koa')
const logger = require('koa-morgan')
const Router = require('koa-router')
const bodyParser = require('koa-body')

const server = new Koa()
const router = new Router()

router.get('/types', ctx => {
    ctx.body = [
        'all',
        'turistic',
        'random'
    ]
})

router.post('/next', bodyParser(), ctx => {
    ctx.body = { data: ctx.request.body }
})

router.get('/', ctx => {
    ctx.body = 'io - моя сигнатурочка 111'
})

server.use(logger('tiny'))
server.use(router.routes())

server.listen(3001)