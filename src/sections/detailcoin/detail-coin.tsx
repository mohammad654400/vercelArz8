"use client";
import SendIcon from "@/assets/icons/detailcoin/send";
import SocialIcons from "@/assets/icons/detailcoin/socialicons";
import DocumentCode from "@/assets/icons/detailcoin/documentcode";
import Star from "@/assets/icons/star";
import React, { useEffect, useMemo, useState } from "react";
import TransAction from "@/sections/home/transaction/transAction";
import DetailDescription from "./description";
import ArrowBotton from "@/assets/icons/arrrow/arrowup";
import Accordion from "@/components/Accordion";
import CurrentPrice from "./current-price";
import DescriptionTable from "./description-table";
import Earth from "@/assets/icons/detailcoin/earth";
import CryptoModal from "@/sections/home/transaction/cryptoModal";
import { usePathname, useRouter } from "next/navigation";
import useGetData from "@/hooks/useGetData";
import { useTheme } from "@/contexts/theme-provider";
import CryptoDetails from "./crypto-details";
import Skeleton from "react-loading-skeleton";
import ChartContainer from "./charts-container";
import { useFormattedNumber } from "@/hooks/useFormatted-number";

interface HomeCurrency {
  symbol: string;
  price: {
    buy: string;
    sell: string;
  };
  fee: string;
  priceChangePercent: string;
}

interface HomeData {
  [key: string]: HomeCurrency[];
}

interface CryptocurrencyInfo {
  id: number;
  symbol: string;
  name: { fa: string; en?: string };
  icon?: string;
  color?: string;
  isFont: boolean;
  percent: number;
}

interface InfoData {
  cryptocurrency: CryptocurrencyInfo[];
}

interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
  replies: Comment[];
}

type DetailCoinProps = {
  coinName: string;
}

const AccordionData = [
  {
    id: 1,
    title: "چگونه ارزهای دیگر را به بیت کوین تبدیل کنیم؟",
    content:
      "در دنیای پر از پدیده‌ و اصطلاحات ارز دیجیتال یکی از واژه‌هایی که هیاهو به همراه داشته است، عبارت “بول ران” (Bull Run) است. این اصطلاح همیشه به زمانی اشاره دارد که بازار در وضعیت گاوی و یا صعودی قرار دارد.",
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
      "بله، در گردونه شانس جدید «ارز هشت»، جوایزی که برای هر سطح در نظر گرفته شده متفاوت است و این موضوع وابسته به حجم معاملات و گردش 30 روزه شما در سایت است. سطوح کاربری برای چرخش گردونه به شرح زیر است: <br/>1.  سطح برنزی:  برای کاربرانی که احراز هویت اولیه (اطلاعات هویتی) را کامل کرده و حجم معاملات آن‌ها در طی 1 ماه بین 0 تا 100 میلیون تومان بوده است. <br/>2.  سطح نقره‌ای:  گردونه شانس برای کاربرانی قابل چرخش است که حجم معاملاتی یک ماه اخیرشان از 100 میلیون تا 400 میلیون تومان باشد. <br/>3.  سطح طلایی:  در این سطح، مبلغ گردش معاملاتی شما باید در یک ماه از 400 میلیون تا 1 میلیارد تومان باشد تا بتوانید گردونه طلایی را بچرخانید. <br/>4.  سطح کریستالی:  آخرین سطح، سطح کریستالی است که جوایز ویژه‌ای برای آن در نظر گرفته شده. برای چرخاندن گردونه در این سطح، حجم معاملات شما در یک ماه باید بیشتر از 1 میلیارد تومان باشد. <br/> نکته:  در سطح‌های طلایی و کریستالی گزینه پوچ وجود ندارد و شما در هر صورت به صورت روزانه برنده جایزه خواهید شد.",
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

export default function DetailCoin({ coinName }: DetailCoinProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currency, setCurrency] = useState<any>([]);
  const [favorite, setFavorites] = useState<string[]>([]);
  const { theme, baseColor, highlightColor } = useTheme();
  const { formatNumber } = useFormattedNumber();
  const [selectItem, setSelectItem] = useState<number | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const route = usePathname().split("/")[2].toUpperCase();
  const { data: infoData, isLoading: infoIsLoading } = useGetData("info");
  const { data: coinData, isLoading: coinIsLoading } = useGetData(`cryptocurrencies/${coinName}`, 60000);
  const { data: homeData, isLoading: homeLoading } = useGetData("home", 60000);
  const coin = infoData?.cryptocurrency?.find(
    (item: any) => item.symbol === coinName
  );

  const coinChart = coinData?.chart;

  const [currentCoin, setCurrentCoin] = useState<any>(null); // Initially null
  useEffect(() => {
    if (infoData) {
      const foundCoin = infoData.cryptocurrency?.find(
        (item: any) => item.symbol === coinName
      );
      setCurrentCoin(foundCoin || null); // Set currentCoin when data is available
    }
  }, [infoData, coinName]);

  // handle 404 error
  const router = useRouter();
  useEffect(() => {
    if (
      infoData &&
      !infoData?.cryptocurrency?.some((item: any) => item.symbol === coinName)
    ) {
      router.push("/not-found");
    }
  }, [infoData, coinName, router]);

  // array for
  const newCryptos = coinData?.new.map((crypto: any) => {
    const match = infoData?.cryptocurrency?.find(
      (item: any) => item.symbol === crypto.symbol
    );
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
    const match = infoData?.cryptocurrency?.find(
      (item: any) => item.symbol === crypto.symbol
    );
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

  const handleFavorite = (symbol: string) => {
    let updatedFavorites;
    if (favorite.includes(symbol)) {
      updatedFavorites = favorite.filter((item) => item !== symbol);
    } else {
      updatedFavorites = [...favorite, symbol];
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

  // -------------------------------

  const cryptoMap = useMemo(() => {
    return new Map(
      infoData?.cryptocurrency.map((crypto: any) => [crypto.symbol, crypto])
    );
  }, [infoData]);

  const filterData = useMemo(() => {
    if (!homeData || !cryptoMap.size) return []; // Ensure data exists

    return Object.values(homeData)
      .flat()
      .map((item: any) => {
        const matchedInfo = cryptoMap.get(item.symbol) as
          | Partial<CryptocurrencyInfo>
          | undefined;

        // Skip if matchedInfo is undefined or an empty object
        if (!matchedInfo || Object.keys(matchedInfo).length === 0) {
          return null; // Return null for items we want to exclude
        }

        return {
          id: matchedInfo.id || 0,
          symbol: item.symbol || "Unknown",
          name: matchedInfo.name?.fa || "نامشخص",
          icon: matchedInfo.icon || "default.svg",
          color: matchedInfo.color || "#000",
          isFont: matchedInfo.isFont || false,
          percent: matchedInfo.percent || 0,
          price: item.price || 0,
          fee: item.fee || "0",
          priceChangePercent: item.priceChangePercent || 0,
        };
      })
      .filter(Boolean); // Remove null values from the array
  }, [homeData, cryptoMap]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <div className="flex flex-col w-full bg-background base-style pt-32 sm:pt-24">
      <div className="w-full justify-between flex items-center gap-x-4  sm:mb-6 h-11 sm:h-[75px] ">
        {infoIsLoading || coinIsLoading ? (
          <div className="h-[44px] w-[267px] sm:w-[434px] sm:h-[75px] md:w-[590px] rounded-lg overflow-hidden ">
            <Skeleton
              baseColor={baseColor}
              highlightColor={highlightColor}
              className="!w-full !h-full !rounded-lg !overflow-hidden"
            />
          </div>
        ) : (
          <>
            <div
              onClick={handlerChenge}
              className="flex justify-between items-center w-[70%] md:max-w-[500px] lg:max-w-[590px] h-full bg-secondary py-1 px-1 sm:py-3 sm:pr-4 sm:pl-2 rounded-[9px] sm:rounded-2xl cursor-pointer gap-2 sm:gap-4"
            >
              <div className="flex h-full justify-center gap-x-2 sm:gap-x-4 items-center min-w-0">
                {/* Coin Icon */}
                <div className="w-7 h-7 lg:w-12 lg:h-12 sm:my-auto">
                  {infoIsLoading || coinIsLoading ? (
                    <Skeleton
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                      circle
                      className="w-[30px] sm:w-[41px] h-[30px] sm:h-[41px] sm:-translate-y-2 lg:translate-y-0"
                    />
                  ) : currentCoin ? (
                    currentCoin?.isFont ? (
                      <i
                        className={`cf cf-${currentCoin?.symbol?.toLowerCase() || "default"
                          } text-3xl md:text-[41px] w-full h-full flex items-center justify-center object-fill`}
                        style={{ color: currentCoin?.color || "#000" }}
                      ></i>
                    ) : (
                      <img
                        src={
                          currentCoin?.icon
                            ? `https://app.arz8.com/api/images/currency/${currentCoin?.icon}`
                            : "/default-image.png"
                        }
                        alt={currentCoin?.symbol || "Unknown Coin"}
                        className="w-full h-full object-fill"
                      />
                    )
                  ) : (
                    <p>X</p>
                  )}
                </div>

                {/* Coin Name Container */}
                <div className="flex flex-col h-full justify-center gap-y-[2px] sm:gap-y-3 min-w-0">
                  <div className="flex items-center gap-x-1 md:gap-x-2 min-w-0">
                    {infoIsLoading || coinIsLoading ? (
                      <Skeleton
                        baseColor={baseColor}
                        highlightColor={highlightColor}
                        className="!w-16 !h-2 md:w-[80px] md:h-[28px] !p-0 !mb-0"
                      />
                    ) : (
                      <p className="text-[10px] sm:text-lg font-semibold truncate flex-1 min-w-0 overflow-hidden">
                        {coin?.name?.fa}
                      </p>
                    )}

                    {/* Arrow Icon */}
                    <div
                      className={`w-3 h-3 lg:w-5 text-foreground lg:h-5 transition-all duration-300 ${!openModal ? "rotate-180" : ""
                        } ${infoIsLoading || coinIsLoading ? "hidden" : ""}`}
                    >
                      <ArrowBotton />
                    </div>
                    {openModal && (
                      <CryptoModal
                        currencies={filterData}
                        toggle={() => setOpenModal(!openModal)}
                        setCurrency={setCurrency}
                        hasLink={true}
                        setCurrentCoin={setCurrentCoin}
                      />
                    )}
                  </div>

                  {/* English Name */}
                  {infoIsLoading || coinIsLoading ? (
                    <Skeleton
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                      width={60}
                      height={18}
                      className="!w-12 !h-3 md:w-[60px] md:h-[18px] !p-0 !mt-0"
                    />
                  ) : (
                    <span dir="ltr" className="text-[10px] sm:text-lg font-semibold opacity-50 !leading-3 truncate block max-w-full text-right">
                      {coin?.name?.en}
                    </span>
                  )}
                </div>
              </div>

              {/* Price and Change Section */}
              <div className="flex h-full justify-center gap-x-2 sm:gap-x-4">
                <div className="flex flex-col h-full justify-center items-end gap-y-[6px] sm:gap-y-3">
                  {infoIsLoading || coinIsLoading ? (
                    <Skeleton
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                      width={70}
                      height={24}
                      className="!w-[55px] !h-[16px] md:w-[70px] md:h-[24px]"
                    />
                  ) : (
                    <p className="text-[10px] sm:text-[21px] font-semibold flex leading-3">
                      ${formatNumber(coinData?.lastPrice)}
                    </p>
                  )}
                  {infoIsLoading || coinIsLoading ? (
                    <Skeleton
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                      width={50}
                      height={14}
                      className="!w-[38px] !h-[12px] md:w-[50px] md:h-[44px]"
                    />
                  ) : (
                    <p
                      dir="rtl"
                      className="text-[9px] sm:text-sm flex leading-3 items-center"
                    >
                      {formatNumber(coinData?.priceToman.buy)}
                      <span className="text-[7px] font-semibold md:text-base mr-[2px]">
                        تومان
                      </span>
                    </p>
                  )}
                </div>

                {/* Price Change Box */}
                {infoIsLoading || coinIsLoading ? (
                  <Skeleton
                    baseColor={baseColor}
                    highlightColor={highlightColor}
                    width={46}
                    height={46}
                    className="!w-[26px] !h-[26px] md:w-[46px] md:h-[46px]"
                  />
                ) : (
                  <div className="w-9 h-9 sm:w-[70px] sm:h-[61px] bg-background rounded-md sm:rounded-[10px] dark:bg-[#302F34] flex self-center">
                    <span
                      dir="ltr"
                      className={`h-full w-full text-[9px] sm:text-lg flex text-center items-center justify-center font-medium ${coinData?.priceChangePercent?.includes("-")
                          ? "text-[#F00500]"
                          : "text-[#33B028]"
                        }`}
                    >
                      {coinData?.priceChangePercent}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        <div className="flex items-center w-[25%] max-w-[70px] sm:max-w-[121px] h-full justify-center">
          <div className="flex items-center justify-center gap-x-2 sm:gap-x-3 bg-secondary h-full w-full rounded-[9px] sm:rounded-2xl">
            <button
              onClick={handleCopyLink}
              className="flex w-[18px] h-[18px] sm:w-[30px] sm:h-[30px]"
            >
              {isCopied ? (
                <span className="text-[8px] sm:text-xs text-[#33B028]">
                  کپی شد!
                </span>
              ) : (
                <SendIcon />
              )}
            </button>
            <span
              onClick={() => handleFavorite(coin?.symbol)}
              className="flex cursor-pointer w-[18px] h-[18px] sm:w-[30px] sm:h-[30px]"
            >
              <Star
                borderColor={
                  favorite.includes(coin?.symbol) ? "none" : "currentColor"
                }
                backgroundColor={
                  favorite.includes(coin?.symbol) ? "#FFC107" : "none"
                }
              />
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* charts ----------------------------------------------------------------------------------------------------------------------- */}
        <ChartContainer coinChart={coinChart} theme={theme} />

        <div className="flex flex-col h-full w-full lg:w-[38.6%] rounded-lg">
          <TransAction
            coin={filterData?.find((item) => item?.symbol === coinName)}
            infoLoading={false}
            homeLoading={false}
            homeData={homeData}
            infoData={infoData}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="order-2  w-full lg:w-[60%] rounded-xl">
          <CurrentPrice
            currentPrice={formatNumber(coinData?.lastPrice)}
            currentPriceChange={coinData?.priceChangePercent}
          />
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
              defaultOpenId={selectItem}
              onToggle={(id) => setSelectItem(id)}
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

          {/* <div className=" flex mt-10">
            <FormViews addComment={addComment} />
          </div> */}

          {/* <div className=" mt-10">
            <Views comments={comments} setReplyingTo={setReplyingTo} />
          </div> */}
        </div>

        <div className="order-1 lg:order-3 w-full lg:w-[40%] flex flex-col">
          <DescriptionTable
            persianName={currentCoin?.name.fa}
            symbol={coinName.toLocaleUpperCase()}
            lastDollarPrice={formatNumber(coinData?.lastPrice)}
            lastTomanPrice={formatNumber(coinData?.priceToman.buy)}
            dailyChangePercent={coinData?.priceChangePercent}
            dailyTransactionVolume={formatNumber(coinData?.quoteVolume)}
            isLoading={infoIsLoading || coinIsLoading ? true : false}
          />

          <div className="hidden lg:flex flex-col w-full mt-10">
            <h3 className="text-xl font-bold mb-5">بیشترین رشد</h3>
            {/* <Segment data={data} /> */}
            {mostProfitCryptos?.map((item: any, index: number) => (
              <div
                key={index}
                className="border-b-2 last:border-b-0 border-gray-200 py-[10px] "
              >
                <CryptoDetails
                  icon={item.icon}
                  persianName={item.name}
                  symbol={item.symbol}
                  lastDollarPrice={formatNumber(item.lastPrice)}
                  priceChangePercent={item.priceChangePercent}
                  iconColor={item.iconColor}
                  iconIsFont={item.iconIsfont}
                  isLoading={infoIsLoading || coinIsLoading ? true : false}
                />
              </div>
            ))}

            <h3 className="text-xl font-bold mb-5 mt-10">
              جدید ترین ارز های ما
            </h3>
            {/* <Segment data={data} /> */}
            {newCryptos?.map((item: any, index: number) => (
              <div
                key={index}
                className="border-b-2 last:border-b-0 border-gray-200 py-[10px] "
              >
                <CryptoDetails
                  icon={item.icon}
                  persianName={item.name}
                  symbol={item.symbol}
                  lastDollarPrice={formatNumber(item.lastPrice)}
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
