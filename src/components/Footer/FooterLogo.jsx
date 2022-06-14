import React from 'react'

function FooterLogo(props) {
  return (
        <img src={props?.imgUrl} alt={props.title} />
  )
}

export default FooterLogo