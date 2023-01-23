import React from 'react'
import {Title} from './Title'
import {serviceLinks} from '../Data'
import Service from './Service'

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title='our' subTitle='services'/>
      <div className="section-center services-center">
        {serviceLinks.map((service) => {
          return (
            <Service key={service.id} {...service}/>
          )
        })}
      </div>
    </section>
  )
}
