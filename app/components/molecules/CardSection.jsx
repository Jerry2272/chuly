import React from 'react'
import CardComponent from '../CardComponent'

const CardSection = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-5 gap-4 mt-[37px]'>
        <CardComponent />
    </section>
  )
}

export default CardSection