"use client"
import React, { useRef } from 'react'
import Header from './header/Header'
import Body from './body/Body'


export default function Job() {

  const jobListingsRef = useRef<HTMLDivElement>(null);

    const scrollToJobs = () => {
        if (jobListingsRef.current) {
            jobListingsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
  return (
    <div className='bg-background lg:px-[120px]  px-5  py-[30px] '>
        <Header scrollToJobs={scrollToJobs}/>
        <Body ref={jobListingsRef}/>
    </div>
  )
}
