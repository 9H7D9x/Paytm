import React from 'react'
import VideoCard from "./components/VideoCard"
import VideoGrid from './components/VideoGrid'
import Appbar from './components/Appbar'
import { LeftBar } from './components/Leftbar'

const App = () => {
  return (
    <>
    <Appbar/>
    <div classname="flex">
    <LeftBar/>
    <VideoGrid/>
    </div>
   
    </>
    
  )
}

export default App