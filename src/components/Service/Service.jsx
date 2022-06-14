import React from 'react'
import "./style.css"
import ProductOneImage from "../../images/product-1.svg";
import ProductTwoImage from "../../images/product-2.svg";

const serviceData = [
  {
    smallTitle:"Aenean Consectetur Porta",
    title:"Sem Risus Elit Vestibulum",
    desc:"Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.",
    imageUrl:ProductOneImage,
    width:519,
    height:414,
  },
  {
    smallTitle:"Aenean Consectetur Porta",
    title:"Parturient Tortor",
    desc:"Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.",
    imageUrl:ProductTwoImage,
    width:519,
    height:414,
  }
]

function Service() {
  return (
    <div className='service__container'>
      <div className="service__container-wrapper">
        {serviceData.map((data,index) => (
          <div key={index} className='service__item'>
              <div className="service__info">
                  <span className='service__container-small-title'> {data.smallTitle} </span>
                <h1 className='service__info-title'>{data.title}</h1>
                <p className='service__container-desc'> {data.desc}</p>
              </div>
              <div className="service__banner">
                <img src={data.imageUrl} alt={data.title} width={data.width} height={data.height} />
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service