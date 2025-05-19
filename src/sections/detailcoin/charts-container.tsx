import IconFullscreen from "@/assets/icons/detailcoin/icon-fullscreen";
import IconUnFullscreen from "@/assets/icons/detailcoin/icon-unfullscreen";
import TradingViewAdvancedChart from "@/components/charts/trading-view-advanced-chart";
import TradingViewSimpleChart from "@/components/charts/trading-view-simple-chart";
import { useTheme } from "@/contexts/theme-provider";
import React, { useState, useRef, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
const ChartContainer = ({ coinChart, theme }: any) => {
  const { baseColor, highlightColor } = useTheme();
  const [isAdvancedChart, setIsAdvancedChart] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const toggleFullscreen = () => {
    const elem = chartContainerRef.current;
    if (!elem) return;
    const webkitElement = getWebkitFullscreenElement();
    const isCurrentlyFullscreen = document.fullscreenElement || webkitElement;
    if (!isCurrentlyFullscreen) {
      // Enter fullscreen
      if (elem.requestFullscreen) {
        elem.requestFullscreen().then(() => {
          setIsFullscreen(true);
        }).catch(() => {
          // fallback if request fails
          setIsFullscreen(true);
        });
      } else if (isWebkitElement(elem)) {
        elem.webkitRequestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      // Exit fullscreen
      const exit = async () => {
        try {
          if (document.exitFullscreen) {
            await document.exitFullscreen();
          } else if ((document as any).webkitExitFullscreen) {
            (document as any).webkitExitFullscreen();
          }
        } catch (e) {
          // If exiting fullscreen fails, fallback
          handleFullscreenExitFallback();
        } finally {
          if (isIOS) {
            // iOS doesn't reliably trigger fullscreenchange
            setTimeout(() => {
              setIsFullscreen(false);
            }, 500);
          }
        }
      };
      exit();
    }
  };
  const handleFullscreenExitFallback = () => {
    if (isIOS) {
      document.body.style.overflow = "auto";
      // You can choose not to reload and instead fake exit fullscreen by updating state/UI
      setIsFullscreen(false);
    }
  };
  const getWebkitFullscreenElement = (): Element | null => {
    return (document as any).webkitFullscreenElement || null;
  };
  const isWebkitElement = (elem: Element): elem is Element & { webkitRequestFullscreen: () => void } => {
    return "webkitRequestFullscreen" in elem;
  };
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFs = !!(document.fullscreenElement || getWebkitFullscreenElement());
      if (!isIOS) {
        setIsFullscreen(isFs);
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div
      ref={chartContainerRef}
      className={`flex flex-col gap-4 w-full lg:w-[60%] transition-all duration-300 
        ${isFullscreen ? "m-3 p-4 fixed inset-0 z-50 bg-background h-screen min-h-screen" : ""}`}
    >
      {/* Chart Toggle and Fullscreen Button */}
      <div className="flex gap-4 items-center">
        <div className="rounded-[10px] p-4 flex items-center gap-[14px] bg-secondary w-[240px] relative">
          <div
            className={`absolute h-9 bg-fifth rounded-md transition ${isAdvancedChart ? "-translate-x-[104px] w-[110px]" : "w-[100px]"
              }`}
          ></div>
          <button
            onClick={() => setIsAdvancedChart(false)}
            className={`w-24 rounded text-center text-sm z-10 ${!isAdvancedChart ? "text-seventh" : "text-sixth text-opacity-50"
              }`}
          >
            نمودار ساده
          </button>
          <button
            onClick={() => setIsAdvancedChart(true)}
            className={`w-24 rounded text-center text-sm z-10 ${isAdvancedChart ? "text-seventh" : "text-sixth text-opacity-50"
              }`}
          >
            نمودار پیشرفته
          </button>
        </div>
        {/* Fullscreen Button with Dynamic Icons */}
        <button onClick={toggleFullscreen} className="rounded-[10px] p-[14px] bg-secondary">
          {isFullscreen ?
            <div className="h-6 w-6"><IconUnFullscreen /></div>
            :
            <div className="h-6 w-6 p-1"><IconFullscreen /></div>
          }
        </button>
      </div>
      {/* Chart Container - Takes Full Height in Fullscreen */}
      {coinChart ?
        <>
          <div className={`w-full ${isFullscreen ? "h-full" : "lg:h-full h-96"} ${isAdvancedChart ? "" : "hidden"} `}>
            <TradingViewAdvancedChart coinChart={coinChart} theme={theme} />
          </div>
          <div className={`w-full ${isFullscreen ? "h-full" : "lg:h-full h-96"} ${!isAdvancedChart ? "" : "hidden"} `}>
            <TradingViewSimpleChart coinChart={coinChart} theme={theme} />
          </div>
        </>
        :
        <div className={`w-full ${isFullscreen ? "h-full" : "lg:h-full h-96"} rounded-xl `}>
          <Skeleton baseColor={baseColor} highlightColor={highlightColor} className="!w-full !h-full !-mt-10 " />
        </div>
      }
    </div>
  );
};
export default ChartContainer;
