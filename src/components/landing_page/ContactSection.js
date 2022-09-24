import React from 'react'
import Card from '../Card'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section className='pt-20 pb-32 bg-gray-100'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col gap-5 justify-center items-center w-full sm:w-11/12 lg:w-1/2 mx-auto mb-24'>
          <h1 className='text-3xl font-bold'>Build something</h1>
          <p className='text-gray-500 text-center text-lg'>Put the potentially record low maximum sea ice extent tihs year down to low ice. According to the National Oceanic and Atmospheric Administration, Ted, Scambos.</p>
        </div>
        <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-10 relative mb-36'>
          <Card 
            className="text-center py-9 px-9 bg-gray-100" 
            icon={<li className='fab fa-github text-4xl'></li>} 
            title="Excelent Services" 
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <Card 
            className="text-center py-9 px-9 bg-gray-100" 
            icon={<li className='fab fa-github text-4xl'></li>} 
            title="Grow Your Market" 
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <Card 
            className="text-center py-9 px-9 bg-gray-100" 
            icon={<li className='fab fa-github text-4xl'></li>} 
            title="Launch Time" description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        <div className='flex flex-col gap-5 justify-center items-center w-full sm:w-11/12 lg:w-1/2 mx-auto mb-24'>
          <h1 className='text-3xl font-bold'>Want to work with us?</h1>
          <p className='text-gray-500 text-center text-lg'>Complete this form and we will get back to you in 24 hours.</p>
        </div>

        <ContactForm/>
      </div>
    </section>
  )
}

export default ContactSection