import React from 'react'

import Header from './header/Header';
import InfoBox from './body/InfoBox';

export default function DownloadApp() {
  return (
    <div className="bg-background flex flex-col w-full h-auto">
      <Header />
      <div className="base-style">
        <InfoBox />
      </div>
    </div>

  )
}
