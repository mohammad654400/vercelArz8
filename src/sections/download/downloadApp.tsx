import React from 'react'

import Header from './header/Header';
import InfoBox from './body/InfoBox';

export default function DownloadApp() {
  return (
    <div className="bg-background flex flex-col w-full h-auto">
      <Header />
      <div className="flex flex-col px-10 lg:px-32">
        <InfoBox />
      </div>
    </div>

  )
}
