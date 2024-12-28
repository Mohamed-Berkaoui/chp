import React, { useState } from 'react'
import MovieList from './MovieList'
import Filter from './Filter'
import movies from './movies'
function App() {
  const [search,setSearch]=useState({title:"",rate:0})
  console.log(search)
  const filterdMoviesByTitle=movies.filter(movie=>movie.title.toLowerCase().includes(search.title.toLowerCase()))
  console.log("🚀 ~ App ~ filterdMoviesByTitle:", filterdMoviesByTitle)
  const filterdMoviesByRate=search.rate?filterdMoviesByTitle.filter(movie=>movie.rating>=search.rate):filterdMoviesByTitle
  return (
    <div>
      <Filter setSearch={setSearch}/>
      <MovieList movies={filterdMoviesByRate}/ >

    </div>
  )
}

export default App