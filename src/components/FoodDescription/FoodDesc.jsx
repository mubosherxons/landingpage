import React from 'react'
import "./style.css"
import FoodServiceOne from "../../images/ser-1.svg";
import FoodServiceTwo from "../../images/ser-2.svg";
import FoodServiceThree from "../../images/ser-3.svg";
import ServicePictureOne from "../../images/ser-icon-1.svg"
import ServicePictureTwo from "../../images/ser-icon-2.svg"
import ServicePictureThree from "../../images/ser-icon-3.svg"


const foodData = [
  {
    foodName:"Cay sociis nato que penatibus et",
    foodTitle:"Aenean Consectetur",
    foodDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl:FoodServiceOne,
  },
  {
    foodName:"ConsectUltricies",
    foodTitle:"Amet Ipsum",
    foodDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl:FoodServiceTwo,
  },
  {
    foodName:"Aenean Consectetur Porta",
    foodTitle:"Magna Porta Sit Bibendum",
    foodDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl:FoodServiceThree,
  },
]


const foodServiceData = [
  {
    imageUrl:ServicePictureOne,
    title:"Activity Notifications",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
  },
  {
    imageUrl:ServicePictureTwo,
    title:"Custom Timing",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
  },
  {
    imageUrl:ServicePictureThree,
    title:"Mobile Optimized",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
  }
]

function FoodDesc() {

  return (
    <div className='food-service__container'>
      {foodData.map((data,index) => (
        <div className='food-service' key={index}>
          <div className="food__info">
            <h4 className='food__secondary-title'> {data.foodTitle} </h4>
            <h1 className='food__title'> {data.foodTitle} </h1>
            <p className="food-description">
              {data.foodDescription}
            </p>
          </div>
          <div className="food__banner-item">
            <img src={data.imageUrl} alt={data.foodTitle} />
          </div>
        </div>
      ))}

<div className="main__desc-footer"> 
        {foodServiceData.map((food,index) => (
          <div key={index} className='food__footer-item'>
            <img src={food.imageUrl} alt={food.title} />
            <h1 className='food__footer-title'> {food.title} </h1>
            <p className='food__footer-desc'> {food.desc} </p>
          </div>
        ))}
      </div>
      <div className="footer__statistic">
          <div className="footer-statistic__item">
            <h1>+12K</h1>
            <p>Nibh Elit Tristique</p>
          </div>
          <div className="footer-statistic__item">
            <h1>84</h1>
            <p>Aenean Condimentum</p>
          </div>
          <div className="footer-statistic__item">
            <h1>3.07</h1>
            <p>Quam Inceptos</p>
          </div>
          <div className="footer-statistic__item">
            <h1>24h</h1>
            <p>Ullamcorper</p>
          </div>
        </div> 
    </div>
  )
}

export default FoodDesc