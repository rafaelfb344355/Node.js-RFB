
import fastify from "fastify"
import { z } from "zod"
 
const app = fastify()

app.post(`/links`, (request) =>{

   const createLinkSchema =z.object({
code: z.string().min(3),
url: z.string().url(),
    })
const{code,url} =createLinkSchema.parse(request.body)
    
//1:17
})

app.get('/test', () =>{
    return 'hii'
})

app.listen({
    port:3333,
}).then(()=> {
    console.log('HTTP runing')
})