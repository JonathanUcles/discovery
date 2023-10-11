import {Request, Response} from 'express'
import HomePage from '../src/pages/HomePage'
import * as elements from 'typed-html'
export const getHome = (req:Request,res:Response)=>{
    res.status(200).send(<HomePage /> )
     
}
export const postClick = (req:Request, res:Response)=>{
    res.status(200).send(<h1>Response from server controller</h1>)
}