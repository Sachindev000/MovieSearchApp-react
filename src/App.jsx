import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MovieCards from './components/MovieCards'
import SearchBar from './components/SearchBar'

const App = () => {
  const[allMovieData,setAllMovieData]=useState([])
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const fetchMovieData =async ()=>{
  try{
    setLoading(true);
    const res= await fetch(`http://www.omdbapi.com/?s=${searchMovie}&apikey=148064de`)
    const data= await res.json()
    setAllMovieData(data.Search)
    setLoading(false)

  }catch(error){
    console.log(error);
    setLoading(false)
  }
  }
  return (
    <>
    <Navbar/>
    <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData}/> 
    <MovieCards allMovieData={allMovieData} loading={loading}/>
    </>
  )
}

export default App