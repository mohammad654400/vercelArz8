"use client"
import React, { useRef } from 'react'
import HeaderJob from './header/header-Job'
import BodyJob from './body/body-Job'


export default function Job() {

  const jobListingsRef = useRef<HTMLDivElement>(null);

    const scrollToJobs = () => {
      if (jobListingsRef.current) {
          const offsetTop = jobListingsRef.current.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
              top: offsetTop - 100,
              behavior: "smooth",
          });
      }
  };
  
  return (
    <div className='bg-background base-style'>
        <HeaderJob scrollToJobs={scrollToJobs}/>
        <BodyJob ref={jobListingsRef}/>
    </div>
  )
}
