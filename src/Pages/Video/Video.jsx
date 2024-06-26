// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recomended from '../../Components/Recomended/Recomended'

const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo/>
      <Recomended/>
    </div>
  )
}

export default Video
