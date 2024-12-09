"use client"
import React, { useRef } from 'react'
import HeaderJob from './header/headerJob'
import BodyJob from './body/bodyJob'


export default function Job() {

  const jobListingsRef = useRef<HTMLDivElement>(null);

    const scrollToJobs = () => {
        if (jobListingsRef.current) {
            jobListingsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
  return (
    <div className='bg-background lg:px-[120px]  px-5  py-[30px] '>
        <HeaderJob scrollToJobs={scrollToJobs}/>
        <BodyJob ref={jobListingsRef}/>
    </div>
  )
}
