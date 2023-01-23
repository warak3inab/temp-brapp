import React from 'react'
import logo from '../images/logo.svg'
import {socialLinks} from '../Data'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

export const Navbar = () => {
  return ( 
    <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} className="nav-logo" alt="backroads" />
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            { /* <!-- left this comment on purpose --> */ }
            <PageLinks parentClass="nav-links" itemClass="nav-link"/>
            {/* <ul className="nav-links" id="nav-links">
                {pageLinks.map((link) => {
                    let { id, href, text} = link
                    return (  <li>
                                <a key={id} href={href} className="nav-link" rel="noreferrer"> {text} </a>
                            </li>
                    )
                })}
            </ul> */}
            <ul className="nav-icons">
                {socialLinks.map((sL) => {
                    return (
                        <SocialLinks key={sL.id} {...sL} itemClass='nav-icon'/>
                    )
                })}
            </ul>
        </div>
    </nav>
  )  
}
