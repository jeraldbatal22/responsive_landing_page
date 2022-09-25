import React from 'react'
import TeamSection from '../components/landing_page/TeamSection'
import HeaderContent from '../components/HeaderContent'
import WorkingSection from '../components/landing_page/WorkingSection'
import Layout from '../components/Layout'
import ContactSection from '../components/landing_page/ContactSection'
import LandingFooter from '../components/LandingFooter'

const LandingPage = () => {
  return (
    <Layout>
      <HeaderContent/>
      <WorkingSection/>
      <TeamSection/>
      <ContactSection/>
      <LandingFooter/>
    </Layout>
  )
}

export default LandingPage