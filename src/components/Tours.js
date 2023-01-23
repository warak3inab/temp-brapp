import React from 'react'
import {Title} from './Title'
import {tourLinks} from '../Data'
import Tour from './Tour'

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='featured' subTitle='tours'/>
      <div className="section-center featured-center">
        {tourLinks.map((tour) => {
          return (
            <Tour key={tour.id} {...tour}/>
          )
        })}
      </div>
    </section>
  )
}
