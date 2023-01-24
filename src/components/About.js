import React from 'react'
import aboutImg from '../images/about.jpeg'
import {Title} from './Title'

export const About = () => {

  let btnFunc = () => {
    // let mbtn = document.getElementById('btn')
    document.documentElement.scrollTop = 0
  }

  return (
    <section className="section" id="about">
      <Title title='About' subTitle='Us'/>
      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          {/* <a href="#" className="btn">read more</a> */}
          <button type='button' onClick={btnFunc} className='btn'>read more</button>
        </article>
      </div>
    </section>
  )
}
