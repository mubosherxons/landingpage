import React from 'react'
import "./style.css"
import Navbar from "../Header/Header"
import HomeBanner from "../../images/home-banner.svg";
import homeArrowIcon from "../../images/down-scroll.svg"
function Home() {
  return (
    <div className='main__home-container '>
        <Navbar/>
        <div className="home__banner-container">
          <div className="home__info-container">
              <h1 className='home-info__title'> Momentum </h1>
              <p className='home-info__desc'>Launch your product — and savor the momentum.</p>
              <button className='home-info__btn'> Get the App </button>
          </div>
          <div className="home__banner">
            <img src={HomeBanner} width={652} height={680} alt="homebanner" />
          </div>
        </div>
        <div className="home__footer">
          <img src={homeArrowIcon} alt="arrow icon" />
        </div>
    </div>  
  )
}

export default Home