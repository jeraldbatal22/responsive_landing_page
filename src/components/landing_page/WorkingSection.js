import React from 'react'
import Card from '../Card'
// import Teamwork from 'assets/img/teamwork.jpeg';
import Teamwork from '../../assets/img/teamwork.jpeg';

const WorkingSection = () => {

  return (
    <section className='pb-20 bg-gray-100 -mt-32'>
      <div className='max-w-7xl mx-auto px-4'>
      {/* flex-col md:flex-col lg:flex-row */}
      {/* sm:flex-col lg:flex-row */}
      {/* bg-yellow-500 */}
        <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-10 relative mb-36'>
          <Card className="text-center py-9 px-9" icon={<li className='fab fa-github text-4xl'></li>} title="Awarded Agency" description="Divide details about your product or agency work into parts. A paragraph describing a feature will be enough."/>
          <Card className="text-center py-9 px-9" icon={<li className='fab fa-github text-4xl'></li>} title="Free Revisions" description="Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious."/>
          <Card className="text-center py-9 px-9" icon={<li className='fab fa-github text-4xl'></li>} title="Verified Company" description="Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!"/>
        </div>
        <div className='flex flex-col sm:flex-col md:flex-col gap-20 sm:gap-20 lg:gap-0 lg:flex-row justify-between mt-20 '>
          <div className='flex-1'>
            <div className='flex flex-col gap-7 mx-0 lg:mx-24'>
              <h1 className='text-3xl font-bold'>Working with us is a pleasure</h1>
              <p className='text-md text-gray-500'>Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>
              <p className='text-md text-gray-500'>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.</p>
              <a className='text-md text-blue-500 font-bold' href='##'>Read More</a>
            </div>
          </div>
          <div className='flex-1'>
            <div className=' mx-0 sm:mx-0 lg:mx-24'>
            <Card 
              className="py-6 px-6 justify-start text-start"
              icon={<img className='rounded-lg -mt-14' src={Teamwork} alt="teamwork"/>} 
              title="Verified Company" 
              description="Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!"
            />
            </div>
         
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkingSection