import express from 'express';
import { getAllMovies , addMovie}  from './data.js';


export const testRouter = express.Router();

// List all movie names

testRouter.get('/', (request, response) => {
    const movies = getAllMovies()
    // console.log(movies)
    // console.log(JSON.stringify(movies))
    response.send(movies)

  })

  // Adding a new movie name: Alice, type: animation

  testRouter.post('/', (request, response) => {
    const newMovie = request.body;
    addMovie(newMovie)
    console.log(getAllMovies())
    response.send('This movies are now playing')
})
