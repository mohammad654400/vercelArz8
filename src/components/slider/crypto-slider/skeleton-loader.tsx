"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { useTheme } from "@/contexts/theme-provider";

const SkeletonLoader = () => {
  const { baseColor, highlightColor } = useTheme();

  return (
          <div className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 text-[10px] md:text-sm w-full gap-y-[14px] lg:gap-y-3">
              {Array(4).fill(0).map((_, index) => (
                <div key={index} className="flex justify-between w-full h-full pl-3 md:pl-4">
                  {/* قیمت و درصد تغییر */}
                  <div className="flex flex-col justify-center">
                    <Skeleton width={60} height={12} baseColor={baseColor} highlightColor={highlightColor} />
                    <Skeleton width={40} height={10} baseColor={baseColor} highlightColor={highlightColor} />
                  </div>

                  {/* آیکون و اطلاعات ارز */}
                  <div
                    className={`flex items-center dark:border-10 ${(index + 1) % 4 !== 0
                      ? "md:border-r-[3px] md:border-[#ADADAD80] md:pr-4"
                      : "pr-0"
                      }
                  ${(index + 1) % 2 !== 0
                        ? "border-r-[3px] border-[#ADADAD80] pr-3"
                        : "pr-0"
                      }
                  `}
                  >
                    <div className="flex flex-col justify-center items-end mr-1 sm:mr-3 md:mr-2">
                      <Skeleton width={50} height={10} baseColor={baseColor} highlightColor={highlightColor} />
                      <Skeleton width={30} height={10} baseColor={baseColor} highlightColor={highlightColor} />
                    </div>
                    <div className="w-[22px] h-[22px] md:w-[33px] md:h-[33px] my-auto">
                      <Skeleton width="100%" height="100%" circle={true} baseColor={baseColor} highlightColor={highlightColor} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  );
};

export default SkeletonLoader;
