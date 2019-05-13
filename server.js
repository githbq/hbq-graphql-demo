import Koa from 'koa'
import KoaStatic from 'koa-static' 
import bodyParser from 'koa-bodyparser'

require('./mongodb')

const router = require('./router')

const app = new Koa() 

const port = 4001

app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));
 
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(port,()=>{ 
  console.log(`🚀 Server ready at http://localhost:${port}`) 
})
 