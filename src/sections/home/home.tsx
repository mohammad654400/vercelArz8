import React from 'react'
import FeaturesBanner from './featuresBanner/featuresBanner'
import Header from './header/header'
import MainTop from './maintop/mainTop'
export default function Home() {
  return (
    <div className='flex flex-col gap-8 px-[120px] py-[30px]'>
        <MainTop/>
    </div>
  )
}
