"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { useTheme } from "@/contexts/theme-provider";

const SkeletonLoader = () => {
  const { baseColor, highlightColor } = useTheme();

  return (
    Array(6).fill(0).map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 md:grid-cols-6 max-w-[1165px] items-center text-center py-4"
                  role="listitem"
                >
                  <div className="flex flex-col justify-start pl-0 pr-0 col-span-1">
                    <div className="flex items-center gap-2 justify-start pr-2 md:pr-0">
                      <div className="w-[28px] h-[28px] md:w-[44px] md:h-[44px] flex">
                        <Skeleton width={28} height={28} circle={true} baseColor={baseColor} highlightColor={highlightColor} />
                      </div>


                      <div className="flex flex-col justify-center gap-y-1 md:gap-y-2">
                        <Skeleton width={50} height={12} baseColor={baseColor} highlightColor={highlightColor} />
                        <Skeleton width={30} height={10} baseColor={baseColor} highlightColor={highlightColor} />
                      </div>
                    </div>
                  </div>

                  <div className="w-full hidden md:block md:text-lg font-semibold">
                    <Skeleton width={60} height={14} baseColor={baseColor} highlightColor={highlightColor} />
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-center md:items-center md:text-center gap-x-2 col-span-1">
                    <Skeleton width={50} height={12} baseColor={baseColor} highlightColor={highlightColor} />
                    <span className="text-[8px] md:text-sm font-semibold opacity-50">تومان</span>
                  </div>

                  <div className="text-[10px] md:text-lg font-semibold text-end md:text-center ml-10 md:ml-0">
                    <Skeleton width={40} height={12} baseColor={baseColor} highlightColor={highlightColor} />
                  </div>

                  <div className="md:flex justify-center m-auto hidden object-cover">
                    <Skeleton width={120} height={44} baseColor={baseColor} highlightColor={highlightColor} />
                  </div>

                  <div className="hidden md:flex justify-end pl-0 pr-0">
                    <Skeleton width={119} height={46} borderRadius={10} baseColor={baseColor} highlightColor={highlightColor} />
                  </div>
                </div>
              ))
  );
};

export default SkeletonLoader;
