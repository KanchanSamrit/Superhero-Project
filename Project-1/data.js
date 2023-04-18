const movies=[

    {name: 'Frozen', type: 'animation'},
    {name: 'John Wick4', type: 'action'},
    {name: 'Shazam', type: 'adventure'},
    {name: 'Scream', type: 'horror'}
    
]

export function getAllMovies(){
    return movies;

}

export function addMovie(movie) {
    movies.push(movie)
    
}