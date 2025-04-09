import DetailCoin from '@/sections/detailcoin/detail-coin';

type Params = {
  name: string;
};

// Fetch the coin description on the server with try-catch for error handling
async function fetchCoinDescription(symbol: string) {
  try {
    const res = await fetch(`https://arz8.com/blog/wp-json/api/v1/crypto/symbol/${symbol}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch description for ${symbol}`);
    }

    const data = await res.json();

    return data.content || 'No description available'; // <-- updated here
  } catch (error) {
    console.error('Error fetching description:', error);
    return 'Failed to load description';
  }
}



export function generateStaticParams(): Params[] {
  const popularCoins = ['BTC', 'ETH', 'XRP', 'BNB', 'SOL', 'DOGE', 'ADA', 'TRX', 'LINK', 'TON', 'XLM', 'AVAX', 'SUI', 'LTC', 'DOT', 'BCH', 'XMR', 'UNI'];
  return popularCoins.map((coin) => ({ name: coin }));
}

export const revalidate = 3600;

export function generateMetadata({ params }: { params: Params }) {
  const { name } = params;
  return {
    title: `${name} قیمت لحظه ای | ${name} خرید وفروش صرافی ارز هشت | ارز هشت | ارز دیجیتال`,
    description: `مشاهده قیمت لحظه‌ای ${name}، خرید و فروش آسان، نمودار تغییرات، اطلاعات کامل و تحلیل ${name} در صرافی ارز هشت. بدون کارمزد پنهان و با امنیت بالا.`,
    alternates: {
      canonical: `https://arz8.com/price-cryptocurrencies/${name}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function DetailCoinPage({ params }: { params: Params }) {
  const coinName = params.name.toUpperCase(); // Ensure the coin name is in uppercase
  const coinDescription = await fetchCoinDescription(coinName); // Fetch the description with error handling

  return <DetailCoin coinName={coinName} coinDescription={coinDescription} />;
}
