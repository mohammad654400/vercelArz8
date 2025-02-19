"use client";
import BNB from "@/assets/icons/bnb";
import SendIcon from "@/assets/icons/detailcoin/send";
import SocialIcons from "@/assets/icons/detailcoin/socialicons";
import DocumentCode from "@/assets/icons/detailcoin/documentcode";
import Star from "@/assets/icons/star";
import React, { useEffect, useState } from "react";
import TransAction from "@/sections/home/transaction/transAction";
import DetailDescription from "./description";
import ArrowBotton from "@/assets/icons/arrrow/arrowup";
import Accordion from "@/components/Accordion";
import Views from "./views";
import FormViews from "./form-views";
import CurrentPrice from "./current-price";
import DescriptionTable from "./description-table";
import Earth from "@/assets/icons/detailcoin/earth";
import CryptoModal from "@/sections/home/transaction/cryptoModal";
import { usePathname } from "next/navigation";
import Segment from "./segment";
import TradingViewSimpleChart from "@/components/charts/trading-view-simple-chart";
import useGetData from "@/hooks/useGetData";
import TradingViewAdvancedChart from "@/components/charts/trading-view-advanced-chart";
import { useTheme } from "@/contexts/theme-provider";
import CryptoDetails from "./crypto-details";

interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
  replies: Comment[];
}

const data = [
  {
    price: "43,537,353",
    priceIR: "43,537,353",
    percentage: "% 3",
    name: "AAVE",
    Persian: "آوه",
    icon: <BNB />,
  },
  {
    price: "43,537,353",
    percentage: "% 1.37",
    priceIR: "43,537,353",
    name: "BTC",
    Persian: "بیت کوین",
    icon: <BNB />,
  },
  {
    price: "43,537,353",
    percentage: "% 1.37",
    priceIR: "43,537,353",
    name: "AVAX",
    Persian: "آوالانچ",
    icon: <BNB />,
  },
  {
    price: "43,537353",
    percentage: "% 1.37",
    priceIR: "43,537,353",
    name: "SUI",
    Persian: "آوالانچ",
    icon: <BNB />,
  },
  {
    price: "43,537,353",
    percentage: "% 1.37",
    priceIR: "43,537,353",
    name: "FTM",
    Persian: "آوالانچ",
    icon: <BNB />,
  },
];

const AccordionData = [
  {
    id: 1,
    title: "چگونه ارزهای دیگر را به بیت کوین تبدیل کنیم؟",
    content:
      "در دنیای پر از پدیده‌ و اصطلاحات ارز دیجیتال یکی از واژه‌هایی که هیاهو به همراه داشته است، عبارت “بول ران” (Bull Run) است. این اصطلاح همیشه به زمانی اشاره دارد که بازار در وضعیت گاوی و یا صعودی قرار دارد."
  },

  {
    id: 2,
    title: "در هر ۲۴ ساعت چندبار میتونیم گردونه شانش را بچرخونیم؟",
    content:
      "در هر ۲۴ ساعت فقط یک بار می‌تونید اقدام به چرخش گردونه کنید. در صورتی که همین الان گردونه رو بچرخونید، فردا همین موقع دوباره می‌تونید شانس خودتون رو مجدد امتحان کنید.",
  },
  {
    id: 3,
    title: "آیا سطح حساب کاربری در برنده شدن جایزه گردونه شانس تأثیرگذار است؟",
    content:
      "بله، در گردونه شانس جدید «ارز هشت»، جوایزی که برای هر سطح در نظر گرفته شده متفاوت است و این موضوع وابسته به حجم معاملات و گردش 30 روزه شما در سایت است. سطوح کاربری برای چرخش گردونه به شرح زیر است:\n\n1. **سطح برنزی:** برای کاربرانی که احراز هویت اولیه (اطلاعات هویتی) را کامل کرده و حجم معاملات آن‌ها در طی 1 ماه بین 0 تا 100 میلیون تومان بوده است.\n\n2. **سطح نقره‌ای:** گردونه شانس برای کاربرانی قابل چرخش است که حجم معاملاتی یک ماه اخیرشان از 100 میلیون تا 400 میلیون تومان باشد.\n\n3. **سطح طلایی:** در این سطح، مبلغ گردش معاملاتی شما باید در یک ماه از 400 میلیون تا 1 میلیارد تومان باشد تا بتوانید گردونه طلایی را بچرخانید.\n\n4. **سطح کریستالی:** آخرین سطح، سطح کریستالی است که جوایز ویژه‌ای برای آن در نظر گرفته شده. برای چرخاندن گردونه در این سطح، حجم معاملات شما در یک ماه باید بیشتر از 1 میلیارد تومان باشد.\n\n**نکته:** در سطح‌های طلایی و کریستالی گزینه پوچ وجود ندارد و شما در هر صورت به صورت روزانه برنده جایزه خواهید شد.",
  },
  {
    id: 4,
    title: "کد تخفیف ترید به چه صورت اعمال میشود؟",
    content:
      "تخفیف کارمزد و سایر جوایز نقدی بصورت خودکار در حساب کاربری اعمال میشود.",
  },
  {
    id: 5,
    title: "گردونه شانس در کدام قسمت است؟",
    content:
      "برای چرخش گردونه شانس وارد پنل شده و به قسمت گردونه شانس مراجعه کنید. دسترسی به این صفحه از طریق لینک زیر هم امکان پذیر است:  https://app.arz8.com/tools/wheel ",
  },
  {
    id: 6,
    title: "تایمر گردونه برای من کار نمیکند؟",
    content:
      "برای رفع این مشکل از آخرین نسخه مرورگر گوگل کروم و فایرفاکس استفاده کنید و چک کنید که حتما آخرین نسخه مرورگر روی گوشی یا کامپیوتر شما نصب باشد.",
  },
];

export default function DetailCoin() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currency, setCurrency] = useState<any>([]);
  const [favorite, setFavorites] = useState<string[]>([]);
  const [isAdvancedChart, setIsAdvancedChart] = useState<boolean>(false)
  const { theme } = useTheme()

  const route = usePathname().split("/")[2];
  const { data: infoData, isLoading: infoIsLoading } = useGetData('info')
  const coin = infoData?.cryptocurrency?.find((item: any) => item.symbol === route) || data[0];

  const { data: coinData, isLoading: coinIsLoading, error } = useGetData(`cryptocurrencies/${route}`, 6000)
  const coinChart = coinData?.chart

  const currentCoin = infoData?.cryptocurrency?.find((item: any) => item.symbol === route)


  const newCryptos = coinData?.new.map((crypto: any) => {
    const match = infoData?.cryptocurrency?.find((item: any) => item.symbol === crypto.symbol);
    return {
      symbol: crypto.symbol,
      icon: match?.icon || "default.svg",
      name: match?.name?.fa || "نامشخص",
      iconColor: match?.color || "#f7931a",
      iconIsfont: match?.isFont || false,
      lastPrice: crypto.lastPrice,
      priceChangePercent: crypto.priceChangePercent,
    };
  });
  const mostProfitCryptos = coinData?.profit.map((crypto: any) => {
    const match = infoData?.cryptocurrency?.find((item: any) => item.symbol === crypto.symbol);
    return {
      symbol: crypto.symbol,
      icon: match?.icon || "default.svg",
      name: match?.name?.fa || "نامشخص",
      iconColor: match?.color || "#f7931a",
      iconIsfont: match?.isFont || false,
      lastPrice: crypto.lastPrice,
      priceChangePercent: crypto.priceChangePercent,
    };
  });





  const handlerChenge = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    setCurrency(coin);
    const storedFavorites = localStorage.getItem("favorites");
    storedFavorites
      ? setFavorites(JSON.parse(storedFavorites))
      : setFavorites([]);
  }, [currency]);

  const handleFavorite = (name: string) => {
    let updatedFavorites;
    if (favorite.includes(name)) {
      updatedFavorites = favorite.filter((item) => item !== name);
    } else {
      updatedFavorites = [...favorite, name];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const addComment = (name: string, text: string) => {
    const newComment: Comment = {
      id: new Date().getTime().toString(),
      name,
      text,
      date: new Date().toLocaleDateString("fa-IR"),
      replies: [],
    };

    if (replyingTo) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === replyingTo
            ? { ...comment, replies: [...comment.replies, newComment] }
            : comment
        )
      );
    } else {
      setComments((prevComments) => [...prevComments, newComment]);
    }

    setReplyingTo(null);
  };

  return (
    <div className="flex flex-col w-full bg-background base-style pt-32 sm:pt-24">
      <div className="w-full justify-between flex items-center gap-x-4  sm:mb-6 h-11 sm:h-[75px] ">
        <div className="flex justify-between items-center w-[70%]  md:max-w-[500px] lg:max-w-[590px] h-full bg-secondary py-1 px-1 sm:py-3 sm:px-4 rounded-[9px] sm:rounded-2xl">

          <div className="flex  h-full justify-center gap-x-2 ">
            {/* <div className="w-7 h-7 lg:w-12 lg:h-12 my-auto">{coin.icon}</div> */}
            <div className="flex flex-col  h-full justify-center gap-y-[6px] sm:gap-y-3 ">
              <div className="flex gap-x-1 md:gap-x-2 " onClick={handlerChenge}>
                <p className="text-xs sm:text-lg font-semibold !leading-3">
                  {coin.name.fa}
                </p>
                <div
                  className={`w-3 h-3 lg:w-5 text-foreground lg:h-5 transition-all duration-300 ${!openModal ? "rotate-180" : ""
                    }`}
                >
                  <ArrowBotton />

                </div>
                {openModal ? (
                  <CryptoModal
                    currencies={data}
                    toggle={setOpenModal}
                    setCurrency={setCurrency}
                    hasLink={true}
                  />
                ) : (
                  ""
                )}
              </div>
              <span className="text-xs sm:text-lg font-semibold opacity-50 flex !leading-3">
                {coin.name.en}
              </span>
            </div>
          </div>

          <div className="flex  h-full justify-center gap-x-2 sm:gap-x-4">
            <div className="flex flex-col h-full  justify-center items-end gap-y-[6px] sm:gap-y-3 ">

              <p className="text-xs sm:text-[21px] font-semibold flex leading-3">
                ${coinData?.lastPrice}
              </p>
              <p dir="rtl" className="text-xs sm:text-sm font-semibold flex leading-3">
                {coinData?.priceToman.buy} تومان
              </p>

            </div>

            <div className="w-9 h-9 sm:w-[61px] sm:h-[61px] bg-background rounded-md sm:rounded-[10px] dark:bg-[#302F34] flex self-center">
              <span className="text-[#33B028] h-full w-full text-xs lg:text-[21px] flex text-center items-center justify-center font-semibold">
                {coinData?.priceChangePercent}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center w-[25%] max-w-[70px] sm:max-w-[121px] h-full justify-center">
          <div className="flex items-center justify-center gap-x-2 sm:gap-x-3 bg-secondary h-full w-full rounded-[9px] sm:rounded-2xl">
            <span className="flex w-[18px] h-[18px] sm:w-[30px] sm:h-[30px]"><SendIcon /></span>
            <span
              onClick={() => handleFavorite(coin.name)}
              className="flex cursor-pointer w-[18px] h-[18px] sm:w-[30px] sm:h-[30px]"
            >
              <Star
                borderColor={favorite.includes(route) ? "none" : "currentColor"}
                backgroundColor={favorite.includes(route) ? "#FFC107" : "none"}
              />
            </span>
          </div>
        </div>
      </div>

      {/* charts ----------------------------------------------------------------------------------------------------------------------- */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-col gap-4  w-full lg:w-[60%]">
          <div className="rounded-[10px] p-2 flex items-center gap-3 bg-third w-[230px]">
            <button onClick={() => setIsAdvancedChart(false)} className={`p-2 rounded-md text-sm ${!isAdvancedChart ? 'bg-fifth text-seventh' : 'bg-none text-sixth text-opacity-50'}`}>نمودار ساده</button>
            <button onClick={() => setIsAdvancedChart(true)} className={`p-2 rounded-md text-sm ${isAdvancedChart ? 'bg-fifth text-seventh' : 'bg-none text-sixth text-opacity-50'}`}>نمودار پیشرفته</button>
          </div>
          {!isAdvancedChart
            ?
            <div className="w-full lg:h-full h-96 rounded-lg overflow-hidden"><TradingViewSimpleChart coinChart={coinChart} theme={theme} /></div>
            :
            <div className="w-full lg:h-full h-96 rounded-lg overflow-hidden"><TradingViewAdvancedChart coinChart={coinChart} theme={theme} /></div>
          }
        </div>
        <div className="flex flex-col h-full w-full lg:w-[38.6%]  rounded-lg">
          <TransAction coin={coin} infoLoading={false} homeLoading={false} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="order-2  w-full lg:w-[60%] rounded-xl">
          <CurrentPrice />
          <div className="mt-10">
            <div className="hidden lg:flex mb-5 gap-4">
              <div className="flex gap-x-2 px-3 py-2 justify-center items-center rounded-[10px] bg-secondary">
                <Earth />
                <span className="text-xs">Binance Coin</span>
              </div>
              <div className="flex gap-x-2 px-3 py-2 justify-center items-center rounded-[10px] bg-secondary">
                <DocumentCode />
                <span className="text-xs"> منابع کدها</span>
              </div>
              <div className="flex gap-x-2 px-3 py-2 justify-center items-center rounded-[10px] bg-secondary">
                <SocialIcons />
                <span className="text-xs">ایکس BNB</span>
              </div>
            </div>
            <DetailDescription />
          </div>

          <div className="flex flex-col gap-5 mt-10 lg:mt-11">
            <Accordion
              items={AccordionData}
              titleBgColor="bg-[#FFEAC1] dark:bg-[#242428]"
              contentBgColor="bg-[#FFF9EE] dark:bg-[#302F34]"
              highlightEnabled={false}
              textTitle="text-sm"
              smTextTitle="sm:text-base"
              lgTextTitle="lg:text-base"
              textContent="text-[10px]"
              smTextContent="sm:text-sm"
              lgTextContent="lg:text-xs"
            />
          </div>

          <div className=" flex mt-10">
            <FormViews addComment={addComment} />
          </div>

          <div className=" mt-10">
            <Views comments={comments} setReplyingTo={setReplyingTo} />
          </div>
        </div>

        <div className="order-1 lg:order-3 w-full lg:w-[40%] flex flex-col">
          <DescriptionTable />

          <div className="hidden lg:flex flex-col w-full mt-10">
            <h1 className="text-xl font-bold mb-5">بیشترین رشد</h1>
            {/* <Segment data={data} /> */}
            {mostProfitCryptos?.map((item: any, index: number) => (
              <div key={index} className="border-b-2 last:border-b-0 border-gray-200 py-[10px] ">
                <CryptoDetails
                  icon={item.icon}
                  persianName={item.name}
                  symbol={item.symbol}
                  lastDollarPrice={item.lastPrice}
                  priceChangePercent={item.priceChangePercent}
                  iconColor={item.iconColor}
                  iconIsFont={item.iconIsfont}
                  isLoading={infoIsLoading || coinIsLoading ? true : false}
                />
              </div>
            ))}

            <h1 className="text-xl font-bold mb-5 mt-10">
              جدید ترین ارز های ما
            </h1>
            {/* <Segment data={data} /> */}
            {newCryptos?.map((item: any, index: number) => (
              <div key={index} className="border-b-2 last:border-b-0 border-gray-200 py-[10px] ">
                <CryptoDetails
                  icon={item.icon}
                  persianName={item.name}
                  symbol={item.symbol}
                  lastDollarPrice={item.lastPrice}
                  priceChangePercent={item.priceChangePercent}
                  iconColor={item.iconColor}
                  iconIsFont={item.iconIsfont}
                  isLoading={infoIsLoading || coinIsLoading ? true : false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
