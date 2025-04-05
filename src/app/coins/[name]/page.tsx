import DetailCoin from '@/sections/detailcoin/detail-coin'
import React from 'react'

type Params = {
  name: string;
};

export function generateStaticParams(): Params[] {
  const popularCoins = ['BTC', 'ETH', 'XRP', 'BNB', 'SOL', 'DOGE', 'ADA', 'TRX', 'LEO', 'LINK', 'TON', 'XLM', 'AVAX', 'SUI', 'SHIB', 'LTC',  'DOT', 'OM', 'BCH', 'BGB', 'XMR', 'HYPE', 'UNI', ];
  return popularCoins.map((coin) => ({ name: coin }));
}

export const revalidate = 3600;

export function generateMetadata({ params }: { params: Params }) {
  // Generate metadata for the page based on the coin name
  const { name } = params;
  return {
    title: `${name} details`,
    description: `Get detailed information about ${name} cryptocurrency`,
  };
}

export default function DetailCoinPage({ params }: { params: Params }) {
  const coinName = params.name.toUpperCase(); // Ensure the coin name is in uppercase
  return <DetailCoin coinName={coinName} />;
}
