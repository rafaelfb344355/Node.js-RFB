import { createClient } from "redis";


export const redis = createClient({
   
   url: 'redis://docker@localhost6379',
})
redis.connect()