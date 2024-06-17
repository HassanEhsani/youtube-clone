// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar?"":'larg-container'}`}>
        <Feed/>
      </div>
    </>
  )
}

export default Home
