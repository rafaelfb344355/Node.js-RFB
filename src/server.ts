import { Console } from "console";
import fastify from "fastify";
 
const app = fastify()

app.get('/test', () =>{
    return 'hii'
})

app.listen({
    port:3333,
}).then(()=> {
    console.log('HTTP runing')
})