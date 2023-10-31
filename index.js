const jsonServer = require('json-server')
const moviePlayerServer = jsonServer.create()
const router = jsonServer.router("db.json")

 const middlewares = jsonServer.defaults()

const port = 4001 || process.env.PORT 

moviePlayerServer.use(middlewares)
moviePlayerServer.use(router)
moviePlayerServer.listen(port,()=>{
    console.log(`Movie Player server started at ${port},waiting for client request!!!`);
})