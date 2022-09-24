import React from 'react'
import Card from '../Card'
import Team1 from '../../assets/img/team-1-800x800.jpg';
import Team2 from '../../assets/img/team-2-800x800.jpg';
import Team3 from '../../assets/img/team-3-800x800.jpg';
import Team4 from '../../assets/img/team-4-470x470.png';

const TeamSection = () => {
  return (
    <section className='pt-20 pb-32'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col gap-5 justify-center items-center w-full sm:w-11/12 lg:w-1/2 mx-auto mb-24'>
          <h1 className='text-3xl font-bold'>Here are our heroes</h1>
          <p className='text-gray-500 text-center'>According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <Card 
            className="py-6 px-6 text-center"
            icon={<img className='rounded-xl w-screen' src={Team1} alt="teamwork"/>} 
            title="Ryan Tompson" 
            description="Web Developer"
              footer={
              <div className="flex gap-5">
                <i className='fab fa-twitter text-blue-500'></i>
                <i className='fab fa-facebook-f text-blue-500'></i>
                <i className='fab fa-dribbble text-red-500'></i>
              </div>
            }
          />
          <Card 
            className="py-6 px-6 text-center"
            icon={<img className='rounded-xl w-screen' src={Team2} alt="teamwork"/>} 
            title="Romina Hadid" 
            description="Marketing Specialist"
            footer={
              <div className="flex gap-5">
                <i className='fab fa-twitter text-blue-500'></i>
                <i className='fab fa-facebook-f text-blue-500'></i>
                <i className='fab fa-dribbble text-red-500'></i>
              </div>
            }
          />
          <Card 
            className="py-6 px-6 text-center"
            icon={<img className='rounded-xl w-screen' src={Team3} alt="teamwork"/>} 
            title="Alexa Smith" 
            description="UI/UX Designer"
              footer={
              <div className="flex gap-5">
                <i className='fab fa-twitter text-blue-500'></i>
                <i className='fab fa-facebook-f text-blue-500'></i>
                <i className='fab fa-dribbble text-red-500'></i>
              </div>
            }
          />
          <Card 
            className="py-6 px-6 text-center"
            icon={<img className='rounded-xl w-screen' src={Team4} alt="teamwork"/>} 
            title="Jenna Kardi" 
            description="Founder and CEO"
              footer={
              <div className="flex gap-5">
                <i className='fab fa-twitter text-blue-500'></i>
                <i className='fab fa-facebook-f text-blue-500'></i>
                <i className='fab fa-dribbble text-red-500'></i>
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}

export default TeamSection