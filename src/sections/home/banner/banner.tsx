import Image from 'next/image';
import React from 'react';
import downloadapp from '@/assets/images/downloadapp.png';

export default function Banner() {
  return (
    <div className="w-full">
      <Image
        alt="ارز هشت"
        src={downloadapp}
        layout="responsive"
        objectFit="cover"
        className="w-full h-auto"
      />
    </div>
  );
}
