import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Blue Cuddly Gorilla</title>
        <meta property="og:title" content="Blue Cuddly Gorilla" />
      </Helmet>
      <a
        href="https://soloreadit.com/short/81472?stream_uuid=feaf32f4-615f-457f-b41c-a96d0750e9c5&amp;trek=1"
        className="home-link"
      >
        <img alt="image" src="/bg_butt-300h.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
