import React from 'react'

const Card = ({ movie }) => {
    return (

        <div class="card">
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.backdrop_path} />
            <div class="card-body">
                <h5 class="card-title">{movie.original_title}</h5>
                <p class="card-text">{movie.overview}</p>
            </div>
        </div>
    )
}

export default Card