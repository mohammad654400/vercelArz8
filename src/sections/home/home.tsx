import React from 'react'
import FeaturesBanner from './featuresBanner/featuresBanner'
import Header from './header/header'
export default function Home() {
  return (
    <div className='h-screen dark:bg-dark-no-gradient bg-custom-gradient'  >
        <FeaturesBanner/>
        <Header/>
    </div>
  )
}
