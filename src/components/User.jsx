import React from 'react'
import "../styles/user.css"
import { Card } from './Card'
import { Followers } from './Followers'

export const User = () => {
  return (
    <section className='section'>
      <div className="section-center user-wrapper">
        <Card/>
        <Followers/>
      </div>
    </section>
  )
}
