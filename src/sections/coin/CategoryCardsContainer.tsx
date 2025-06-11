import BorderedArrowIcon from '@/assets/icons/arrrow/BorderedArrowIcon';
import { useTheme } from '@/contexts/theme-provider';
import { useFormattedNumber } from '@/hooks/useFormatted-number';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

interface CategoryProps {
  completedProfitCurrencies: CategoryItem[];
  completedLossCurrencies: CategoryItem[];
  completedNewCurrencies: CategoryItem[];
}
export interface CategoryItem {
  priceToman: string;
  lastPrice: number;
  name: string;
  symbol: string;
  icon: string;
  color: string;
  isFont: boolean;
  percent: number;
  priceChangePercent: number;
}

const CategoryCardsContainer = ({ completedProfitCurrencies, completedLossCurrencies, completedNewCurrencies }: CategoryProps) => {
  const [currentlyDisplayingDataIndex, setCurrentlyDisplayingDataIndex] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const objectsData = useMemo(() => [
    { data: completedProfitCurrencies, title: 'بیشترین رشد', arrowColor: '#33B028' },
    { data: completedLossCurrencies, title: 'بیشترین ضرر', arrowColor: '#F00500' },
    { data: completedNewCurrencies, title: 'جدیدترین ارز های ما', arrowColor: '#FFC107' },
  ], [completedProfitCurrencies, completedLossCurrencies, completedNewCurrencies])
  const handleCycleCategories = () => {
    setCurrentlyDisplayingDataIndex((prevIndex) => (prevIndex + 1) % objectsData.length);
  };
  const nextDisplayingDataIndex = (currentlyDisplayingDataIndex + 1) % objectsData.length;
  useEffect(() => { // isLoading handler
    if (Array.isArray(completedProfitCurrencies) && Array.isArray(completedLossCurrencies) && Array.isArray(completedNewCurrencies)) {
      if (completedProfitCurrencies.length && completedLossCurrencies.length && completedNewCurrencies.length) setIsLoading(false);
    }
  }, [completedProfitCurrencies, completedLossCurrencies, completedNewCurrencies]);

  return (
    <>
      {/* desktop ( after lg ) */}
      <div className="mt-10 hidden lg:flex gap-8">
        <CategoryCard currencies={completedProfitCurrencies} title='بیشترین رشد' arrowColor='#33B028' isLoading={isLoading} />
        <CategoryCard currencies={completedLossCurrencies} title='بیشترین ضرر' arrowColor='#F00500' isLoading={isLoading} />
        <CategoryCard currencies={completedNewCurrencies} title='جدیدترین ارز های ما' arrowColor='#FFC107' isLoading={isLoading} />
      </div>

      {/* tablet and mobile before lg */}
      <div className="mt-10 flex lg:hidden gap-2">
        <div className="w-full flex-grow" onClick={handleCycleCategories}>
          <ExpandedCategoryCard
            currencies={objectsData[currentlyDisplayingDataIndex].data}
            title={objectsData[currentlyDisplayingDataIndex].title}
            arrowColor={objectsData[currentlyDisplayingDataIndex].arrowColor}
            isLoading={isLoading}
          />
        </div>
        <div className="grow-0 shrink-0" onClick={handleCycleCategories}>
          <CollapsedCategoryCard
            currencies={objectsData[nextDisplayingDataIndex].data}
            title={objectsData[nextDisplayingDataIndex].title}
            arrowColor={objectsData[nextDisplayingDataIndex].arrowColor}
            isLoading={isLoading}
          />
        </div>

      </div>
    </>
  )
}

export default CategoryCardsContainer


const CategoryCard = ({ currencies, title, arrowColor, isLoading }: any) => {
  const { formatNumber } = useFormattedNumber()
  const { baseColor, highlightColor } = useTheme()

  return (
    <div className="bg-secondary pt-7 pb-2.5 px-7 rounded-[45px] w-1/3 flex flex-col gap-7">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl">{title}</h3>
        <span className='w-6 h-6'><BorderedArrowIcon arrowColor={arrowColor} /></span>
      </div>
      <div className="flex flex-col justify-between">
        {isLoading ?
          [...Array(3)].map((_, index) =>
            <div key={index} className="flex flex-col">
              <div className="py-1 flex items-center gap-x-3 md:gap-x-5">
                <div className="flex justify-center items-center my-auto">
                  <Skeleton circle width={41} height={41} baseColor={baseColor} highlightColor={highlightColor} />
                </div>
                <div className="flex flex-col mr-1">
                  <Skeleton width={70} height={16} baseColor={baseColor} highlightColor={highlightColor} />
                  <Skeleton width={40} height={14} baseColor={baseColor} highlightColor={highlightColor} />
                </div>
                <div className="mr-auto flex flex-col">
                  <Skeleton width={70} height={16} baseColor={baseColor} highlightColor={highlightColor} />
                  <Skeleton width={50} height={14} baseColor={baseColor} highlightColor={highlightColor} />
                </div>
              </div>
              {index !== 2 && (
                <Skeleton height={1} width="100%" baseColor={baseColor} highlightColor={highlightColor} />
              )}
            </div>
          )
          :
          currencies?.map((item: CategoryItem) =>
            <Link key={item.symbol} href={`price-cryptocurrencies/${item.symbol}`} className="flex justify-between items-center gap-3 md:gap-5 group border-b border-[#ADADAD80] last:border-b-0 py-4">
              <div className="min-w-[41px] w-[41px] h-[41px] rounded-full flex items-center">
                {item.isFont ?
                  <i className={`cf cf-${item.symbol.toLowerCase()} text-[41px] w-full h-full flex items-center justify-center object-fill`} style={{ color: item.color }}></i>
                  :
                  <img src={`https://app.arz8.com/api/images/currency/${item.icon}`} alt={item.symbol} className="w-full h-full object-fill" />
                }
              </div>
              <div className="flex justify-between w-full">
                <div className="h-full flex flex-col gap-3 items-start max-w-[45%]">
                  <p className="!leading-4 text-sm font-semibold group-hover:text-primary truncate w-full">{item.name}</p>
                  <p className="leading-3 text-sm font-semibold opacity-50">{item.symbol}</p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="flex">
                    <p className="leading-3 text-sm font-semibold">{formatNumber(item.priceToman)}</p>
                    <span className="leading-3 text-sm font-semibold mr-1">تومان</span>
                  </div>
                  <div dir="ltr" className="w-full flex">
                    <p className={`leading-3 text-sm font-semibold ${item.priceChangePercent > 0 ? "text-green-600" : "text-rose-500"}`}>% {item.priceChangePercent}</p>
                  </div>
                </div>
              </div>
            </Link>
          )}
      </div>
    </div>
  )
}


const ExpandedCategoryCard = ({ currencies, title, arrowColor, isLoading }: any) => {
  const { formatNumber } = useFormattedNumber()
  const { baseColor, highlightColor } = useTheme()

  return (
    <div className="bg-secondary pt-5 pb-2.5 px-5 rounded-[45px] w-full flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl">{title}</h3>
        <span className='w-6 h-6'><BorderedArrowIcon arrowColor={arrowColor} /></span>
      </div>
      <div className="flex flex-col justify-between">
        {isLoading ?
          [...Array(3)].map((_, index) =>
            <div key={index} className="flex flex-col">
              <div className="py-1 flex items-center gap-x-3 md:gap-x-5">
                <div className="flex justify-center items-center my-auto">
                  <Skeleton circle width={41} height={41} baseColor={baseColor} highlightColor={highlightColor} />
                </div>
                <div className="flex flex-col mr-1">
                  <Skeleton width={70} height={16} baseColor={baseColor} highlightColor={highlightColor} />
                  <Skeleton width={40} height={14} baseColor={baseColor} highlightColor={highlightColor} />
                </div>
                <div className="mr-auto flex flex-col">
                  <Skeleton width={70} height={16} baseColor={baseColor} highlightColor={highlightColor} />
                  <Skeleton width={50} height={14} baseColor={baseColor} highlightColor={highlightColor} />
                </div>
              </div>
              {index !== 2 && (
                <Skeleton height={1} width="100%" baseColor={baseColor} highlightColor={highlightColor} />
              )}
            </div>
          )
          :
          currencies?.map((item: CategoryItem) =>
            <Link key={item.symbol} href={`price-cryptocurrencies/${item.symbol}`} className="flex justify-between items-center gap-3 md:gap-5 group border-b border-[#ADADAD80] last:border-b-0 py-3">
              <div className="min-w-[41px] w-[41px] h-[41px] rounded-full flex items-center">
                {item.isFont ?
                  <i className={`cf cf-${item.symbol.toLowerCase()} text-[41px] w-full h-full flex items-center justify-center object-fill`} style={{ color: item.color }}></i>
                  :
                  <img src={`https://app.arz8.com/api/images/currency/${item.icon}`} alt={item.symbol} className="w-full h-full object-fill" />
                }
              </div>
              <div className="flex justify-between w-full">
                <div className="h-full flex flex-col gap-3 items-start max-w-[45%]">
                  <p className="!leading-4 text-sm font-semibold group-hover:text-primary truncate w-full">{item.name}</p>
                  <p className="leading-3 text-sm font-semibold opacity-50">{item.symbol}</p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <div className="flex">
                    <p className="leading-3 text-sm font-semibold">{formatNumber(item.priceToman)}</p>
                    <span className="leading-3 text-sm font-semibold mr-1">تومان</span>
                  </div>
                  <div dir="ltr" className="w-full flex">
                    <p className={`leading-3 text-sm font-semibold ${item.priceChangePercent > 0 ? "text-green-600" : "text-rose-500"}`}>% {item.priceChangePercent}</p>
                  </div>
                </div>
              </div>
            </Link>
          )}
      </div>
    </div>
  )
}


const CollapsedCategoryCard = ({ currencies, isLoading, arrowColor }: any) => {
  const { baseColor, highlightColor } = useTheme()

  return (
    <div className="bg-secondary pt-5 pb-2.5 px-5 rounded-full flex flex-col gap-5">
      <div className="flex items-center justify-center">
        <span className='w-6 h-6'><BorderedArrowIcon arrowColor={arrowColor} /></span>
      </div>
      <div className="flex flex-col justify-between">
        {isLoading ?
          [...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col">
              <div className=" py-1 flex items-center gap-x-3 md:gap-x-5">
                <div className="flex justify-center items-center my-auto py-2">
                  <Skeleton circle width={41} height={41} baseColor={baseColor} highlightColor={highlightColor} />
                </div>
              </div>
            </div>
          ))
          :
          currencies?.map((item: CategoryItem) =>
            <div key={item.symbol} className="flex justify-between items-center gap-3 md:gap-5 py-[13px]">
              <div className="min-w-[41px] w-[41px] h-[41px] rounded-full flex items-center">
                {item.isFont ?
                  <i className={`cf cf-${item.symbol.toLowerCase()} text-[41px] w-full h-full flex items-center justify-center object-fill`} style={{ color: item.color }}></i>
                  :
                  <img src={`https://app.arz8.com/api/images/currency/${item.icon}`} alt={item.symbol} className="w-full h-full object-fill" />
                }
              </div>
            </div>
          )}
      </div>
    </div>
  )
}