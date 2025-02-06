"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';
import logo from '@/assets/loading.png';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 flex items-center justify-center">
        <Image src={logo} alt='arz8' width={189} height={120}/>
        </div>

        <p className="text-gray-500 font-semibold text-lg">ARZ8.COM</p>

        <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-yellow-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

