
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import Navbar from './Component/Navbar'
import HeroSection from './Component/HeroSection';
import Card from './Component/Card';
import Section from './Component/Section'
import FilterSection from './Component/FilterSection';
import axios from 'axios';
import {TopData} from './ApiData'

const ENDPOINT = "https://qtify-backend-labs.crio.do/"

function App() {

  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])
  const [songs, setSongs] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])
  const [genres, setGenres] = useState([])

  console.log("Top Data", TopData)

  useEffect(()=>{
    axios.get(`${ENDPOINT}albums/top`)
      .then(({data}) =>{
        setTopAlbums(data)
        console.log("Top Albums", data)
      })

    
        // setTopAlbums(TopData)
        // console.log("Top Albums", TopData)
 

      axios.get(`${ENDPOINT}albums/new`)
      .then((res) =>{
        setNewAlbums(res.data)
      })

      axios.get(`${ENDPOINT}songs`)
      .then((res) =>{
        setSongs(res.data)
        setFilteredSongs(res.data)
      })

      axios.get(`${ENDPOINT}genres`)
      .then((res) =>{
        setGenres([ { key: "all", label: "All" }, ...res.data.data])
      })

  },[])

  return (
    <div>
      <Navbar />  
      <HeroSection />
      <Section title='Top Albums' data={ topAlbums}/>
      <Section title='New Albums' data={ newAlbums}/>
      <FilterSection title='Songs' data={ filteredSongs} filters={genres}
      executeFilter={(genre =>{
        if(genre === 'all') {
          setFilteredSongs(songs)
        } else {
          setFilteredSongs(songs.filter(song => song.genre.key === genre))
        }
      })}
      />

{/* <FilterSection title='Songs' data={ filteredSongsByMood} filters={moods}
      executeFilter={(mood =>{
        if(mood === 'all') {
          setFilteredSongsByMood(songs)
        } else {
          setFilteredSongsByMood(songs.filter(song => song.mood.key === mood))
        }
      })}
      /> */}
      
    </div>
  );
}

export default App;
