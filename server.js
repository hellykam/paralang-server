const Koa = require('koa')
const logger = require('koa-morgan')
const Router = require('koa-router')
const bodyParser = require('koa-body')

const server = new Koa()
const router = new Router()
const rythms = ['assets/temp_patapon.mp3']

router.get('/langs', ctx => {
    ctx.body = [
        'spanish',
        'french',
        'italian',
        'turkish',
        'georgian'
    ]
})

router.post('/rythm', ctx => {
    ctx.body = rythms[Math.floor(Math.random() * rythms.length)];
})

router.post('/words', ctx => {
    ctx.body = [
        {
            text: 'Hola',
            audio: 'assets/sp_1_hello.mp3',
            translate: 'Hello'
        },
        {
            text: 'Gracias',
            audio: 'assets/sp_2_thankyou.mp3',
            translate: 'thank'
        },
        {
            text: 'Por favor',
            audio: 'assets/sp_3_please.mp3',
            translate: 'please'
        },
        {
            text: 'Sí',
            audio: 'assets/sp_4_yes.mp3',
            translate: 'yes'

        },
        {
            text: 'No',
            audio: 'assets/sp_5_no.mp3',
            translate: 'no'

        },
        {
            text: 'Bien',
            audio: 'assets/sp_6_good.mp3',
            translate: 'good'
        },
        {
            text: 'Mal',
            audio: 'assets/sp_7_bad.mp3',
            translate: 'bas'
        },
        {
            text: 'Lo siento',
            audio: 'assets/sp_8_sorry.mp3',
            translate: 'sorry'
        },
//        '¿Me trae dos cafés, por favor, Me trae dos cafés, por favor?',
//        '¿Cuánto cuesta?',
//        '¿Cómo se llama usted?',
//        '¿Cómo estás?',
//        'Bien',
//        '¿Disculpa?',
//        'Más despacio por favor',
//        'Lo siento, no entiendo',
//        'Dónde está (el/la)…',
//        'Adiós'

    ]
})

router.get('/', ctx => {
    ctx.body = 'io'
})

server.use(logger('tiny'))
server.use(router.routes())

server.listen(3001)
