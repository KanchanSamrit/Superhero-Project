import express from 'express'
import {testRouter} from './testRouter.js'

const app = express()
const port = 7000

app.use(express.json())
app.use('/test', testRouter)

// Listening on port 7000

app.listen(port, ()=>{
    console.log('You got it!')
})


