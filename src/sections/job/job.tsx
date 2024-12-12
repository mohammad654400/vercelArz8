"use client"
import React, { useRef } from 'react'
import HeaderJob from './header/headerJob'
import BodyJob from './body/bodyJob'


export default function Job() {

  const jobListingsRef = useRef<HTMLDivElement>(null);

    // const scrollToJobs = () => {
    //     if (jobListingsRef.current) {
    //         jobListingsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    //     }
    // };
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
    <div className='bg-background px-5 py-20 lg:px-[120px] lg:py-[80px] '>
        <HeaderJob scrollToJobs={scrollToJobs}/>
        <BodyJob ref={jobListingsRef}/>
    </div>
  )
}
