"use client";
import BNB from "@/assets/icons/bnb";
import SendIcon from "@/assets/icons/detailcoin/send";
import SocialIcons from "@/assets/icons/detailcoin/socialicons";
import DocumentCode from "@/assets/icons/detailcoin/documentcode";
import Star from "@/assets/icons/star";
import React, { useEffect, useState } from "react";
import TransAction from "@/sections/home/transaction/transAction";
import DetailDescription from "./description";
import ArrowBotton from "@/assets/icons/wheel/arrowBottom";
import Accordion from "@/components/Accordion";
import Views from "./views";
import FormViews from "./form-views";
import CurrentPrice from "./current-price";
import DescriptionTable from "./description-table";
import Coin from "./segment";
import Earth from "@/assets/icons/detailcoin/earth";
import CryptoModal from "@/sections/home/transaction/cryptoModal";
import { usePathname } from "next/navigation";

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
    percentage: "% 1.37",
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
export const AccordionData = [
  {
    id: 1,
    title: " چطور میتونیم جایزه ای که در گردونه برنده شدیم رو برداشت کنیم؟",
    content:
      "به محض چرخش گردونه و برنده شدن جایزه، مبلغ جایزه نقدی یا ارز دیجیتال به کیف پولتون اضافه میشه و قابل برداشت به حساب بانکی هست . حتی بدون فعالیت در صرافی می‌تونید مبلغ رو برداشت کنید.",
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
  const route = usePathname().split("/")[2];
  const coin = data.find((item) => item.name === route) || data[0];
  
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
      <div className="w-full flex justify-between items-center mb-6 h-[75px] gap-x-4">
        <div className="flex justify-between items-center min-w-[270px] w-[60%] h-full bg-secondary  px-4 rounded-2xl">
          <div className="flex justify-center items-center">
            <div className="w-7 h-7 lg:w-12 lg:h-12 my-auto">{coin.icon}</div>
            <div className="flex flex-col mr-2 justify-around">
              <div
                onClick={handlerChenge}
                className="flex cursor-pointer flex-row md:gap-x-2 items-center"
              >
                <p className="text-xs lg:text-lg font-semibold">
                  {coin.Persian}
                </p>
                <div
                  className={`w-3 h-3 lg:w-5 text-foreground lg:h-5 transition-all duration-300 ${
                    !openModal ? "rotate-180" : ""
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
              <p className="text-xs lg:text-lg font-semibold opacity-50">
                {coin.name}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="dir_ltr flex flex-col justify-around">
              <p className="text-xs lg:text-[21px] font-semibold">
                ${coin.price}
              </p>
              <p dir="rtl" className="text-xs lg:text-sm font-semibold">
                {coin.priceIR} تومان
              </p>
            </div>
            <div className="px-[7px] lg:px-[10px] py-2 lg:py-[14px] bg-background rounded-[10px] dark:bg-[#302F34]">
              <span className="text-[#33B028] text-xs lg:text-[21px] font-semibold">
                {coin.percentage}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center w-[40%] h-full justify-end">
          <div className="flex items-center gap-5 bg-secondary h-full  px-5 rounded-2xl">
            <SendIcon />
            <span
              onClick={() => handleFavorite(coin.name)}
              className={`cursor-pointer ${
                favorite.includes(route) ? "text-primary" : ""
              }`}
            >
              <Star />
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex w-full lg:w-[60%] h-[400px]  rounded-lg overflow-hidden">
          <iframe
            src="https://www.tradingview-widget.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22KRAKEN%3AUSDTUSD%7C1Y%22%5D%5D%2C%22chartOnly%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22locale%22%3A%22en%22%2C%22timezone%22%3A%22Asia%2FTehran%22%2C%22colorTheme%22%3A%22dark%22%2C%22autosize%22%3Atrue%2C%22showVolume%22%3Afalse%2C%22showMA%22%3Afalse%2C%22hideDateRanges%22%3Afalse%2C%22hideMarketStatus%22%3Afalse%2C%22hideSymbolLogo%22%3Afalse%2C%22scalePosition%22%3A%22right%22%2C%22scaleMode%22%3A%22Normal%22%2C%22fontFamily%22%3A%22-apple-system%2C%20BlinkMacSystemFont%2C%20Trebuchet%20MS%2C%20Roboto%2C%20Ubuntu%2C%20sans-serif%22%2C%22fontSize%22%3A%2210%22%2C%22noTimeScale%22%3Afalse%2C%22valuesTracking%22%3A%221%22%2C%22changeMode%22%3A%22price-and-percent%22%2C%22chartType%22%3A%22area%22%2C%22maLineColor%22%3A%22%232962FF%22%2C%22maLineWidth%22%3A1%2C%22maLength%22%3A9%2C%22lineWidth%22%3A2%2C%22lineType%22%3A0%2C%22isTransparent%22%3Atrue%2C%22dateRanges%22%3A%5B%221d%7C15%22%2C%221m%7C30%22%2C%223m%7C60%22%2C%2212m%7C1D%22%2C%2260m%7C1W%22%2C%22all%7C1M%22%5D%2C%22lineColor%22%3A%22%230072FF%22%2C%22topColor%22%3A%22rgba(0%2C%20114%2C%20255%2C%200.2)%22%2C%22bottomColor%22%3A%22rgba(0%2C%20114%2C%20255%2C%200)%22%7D"
            className="h-full w-full"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="flex flex-col h-full w-full lg:w-[38.6%]  rounded-lg">
          <TransAction coin={data[0]} />
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
            <Coin data={data} />

            <h1 className="text-xl font-bold mb-5 mt-10">
              جدید ترین ارز های ما
            </h1>

            <Coin data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
