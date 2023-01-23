import React from 'react'
import {socialLinks} from '../Data'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

export let Footer = () => {
  return (
    <footer className="section footer">
    <PageLinks parentClass="footer-links" itemClass={"footer-link"}/>
      {/* <ul className="footer-links">
        {pageLinks.map((link) => {
          let {id, href, text} = link
          return (
            <li key={id}>
              <a href={href} className="footer-link">{text}</a>
            </li>
          )
        })}
      </ul> */}
    <ul className="footer-icons">
      {socialLinks.map((sL) => {
        return (
          <SocialLinks key={sL.id} {...sL} itemClass='footer-icon'/>
        )
      })}
    </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
