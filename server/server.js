const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())


const userController = require('./controllers/userControllers')
const { getAllMovies, createMovie, deleteMovie, updateMovie } = userController


// routes
app.get('/api/movies', getAllMovies)
app.post('/api/movies', createMovie)
app.delete('/api/movies/:movie_id', deleteMovie)
app.put('/api/movies/:movie_id', updateMovie)

//port
app.listen(4004, () => console.log(`Listening on port 4004.`))