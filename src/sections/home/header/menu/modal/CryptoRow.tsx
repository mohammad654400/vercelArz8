import { useFormattedNumber } from "@/hooks/useFormatted-number";
import Link from "next/link";
import { ListChildComponentProps } from "react-window";

const CryptoRow = ({ index, style, data }: ListChildComponentProps) => {
  const crypto = data[index];
  const { formatNumber } = useFormattedNumber();
  return (
    <Link href={`/price-cryptocurrencies/${crypto.symbol}`} style={style} className="w-full flex items-center border-b border-[#ADADAD80] p-2 text-sm hover:bg-fourth" dir="rtl">
      <div className="w-2/5 flex items-center gap-2">
        <div className="w-[25px] h-[25px] flex">
          {crypto.isFont ?
            <i className={`cf cf-${crypto.symbol.toLowerCase()} text-[25px] w-full h-full flex items-center justify-center object-fill`} style={{ color: crypto.color }} />
            :
            <img src={`https://app.arz8.com/api/images/currency/${crypto.icon}`} alt={crypto.symbol} className="w-full h-full object-fill" />
          }
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold">{crypto.name}</span>
          <span className="text-xs font-semibold text-sixth opacity-50">{crypto.symbol}</span>
        </div>
      </div>
      <p dir="ltr" className={`${parseFloat(crypto.priceChangePercent) < 0 ? "text-red-500" : "text-green-500"} text-[10px] font-semibold text-center w-1/5`}>
        {crypto.priceChangePercent} %
      </p>
      <div className="w-2/5 pr-9 text-[8px] font-semibold">
        <span className="text-xs">{formatNumber(crypto.priceToman)}</span> تومان
      </div>
    </Link>
  );
};

export default CryptoRow