import React from 'react'
import Section from '../../components/hero/Section'
import heroImage1 from '../../images/desktop-image-hero-1.jpg'
import heroImage2 from '../../images/desktop-image-hero-2.jpg'
import heroImage3 from '../../images/desktop-image-hero-3.jpg'
import aboutDark from '../../images/image-about-dark.jpg'
import aboutLight from '../../images/image-about-light.jpg'

const MainPage = () => {
  return (
    <div className="relative transition-all grid grid-cols-12 md:grid-rows-3 min-h-screen bg-black ">
    
    <Section hasNavBar={true} sectionImages={[
      heroImage1,
      heroImage2,
      heroImage3
    ]} sectionId={'section1'} 
        colSpan={{
        default : 'col-span-full',
        md : 'md:col-span-7'
        }}  
        rSpan={{
        md : 'md:row-span-2'
        }}  
        height = "h-80"
        >
      
      </Section>
        
  <Section sectionImages={[]}  sectionId={'section2'} 
        colSpan={{
        default : 'col-span-full',
        md : 'md:col-span-5'
        }}  
        rSpan={{
        md : 'md:row-span-2'
        }}  
        
        >
        <div className="h-full flex justify-center flex-col p-fluid">
          <h1 className='text-fluid-header font-bold text-black leading-tight mb-8 '>
            Discover innovative ways to decorate
          </h1>
          <p className="text-gray-400 font-medium text-sm sm:text-normal leading-6 md:max-w-42">
          We provide unmatched quality, comfort, and style for property owners across the country. 
          Our experts combine form and function in bringing your vision to life. Create a room in your 
          own style with our collection and make your property a reflection of you and what you love.        </p>
        </div>
        </Section>

      <Section sectionImages={[
       aboutDark
      ]}  sectionId={'section3'} 
        colSpan={{
        default : 'col-span-full',
        md : 'md:col-span-3'
        }}  
        rSpan={{
          md : 'md:row-span-1'
        }} 
        height = "h-80" 
      ></Section>

  
  
    <Section sectionId={'section4'} 
        colSpan={{
        default : 'col-span-full',
        md : 'md:col-span-6'
        }}  
        rSpan={{
          md : 'md:row-span-1'
        }}  
      >
          <div className="h-full flex justify-center flex-col p-fluid">
          <h1 className='text-fluid-sec-header font-semibold tracking-wide text-black leading-tight uppercase mb-4 '>
          About our furniture
          </h1>
          <p className="text-gray-400 font-medium text-sm sm:text-normal leading-6">
          Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.        
        </p>
        </div>

      </Section>
    <Section sectionImages={[
       aboutLight
      ]}  sectionId={'section5'} 
        colSpan={{
        default : 'col-span-full',
        md : 'md:col-span-3'
        }}  
        rSpan={{
          md : 'md:row-span-1'
        }}
        height = "h-80"  
      ></Section>

   
    </div>
  )
}

export default MainPage