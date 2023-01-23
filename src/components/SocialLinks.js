import React from 'react'

let SocialLinks = ({itemClass, href, icon}) => {
  return (
      <li>
          <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
              <i className={icon}></i>
          </a>
      </li>
  )
}

export default SocialLinks