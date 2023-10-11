import express ,{Express,Request, Response}from 'express'
import dotenv from 'dotenv'
import path from 'path';
import BaseApp from './src/BaseApp'
import * as elements from 'typed-html'
dotenv.config()

const app:Express = express();
const port  = process.env.PORT;
// Set static folder
app.use('/static',express.static('public'));

app.get('/',(req:Request, res:Response)=>{
    res.send(
        <BaseApp><button class='border p-2 text-4xl' hx-post='/clicked' hx-swap='outerHTML'> click</button></BaseApp>);
})
app.post('/clicked',(req:Request, res:Response)=>{
    res.send(<h1>Response from server</h1>)

})
app.listen(port, ()=>{
    console.log(`[server]: app running on http://localhost:${port}`)
})
