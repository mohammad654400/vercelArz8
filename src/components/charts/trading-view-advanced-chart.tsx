import React, { useEffect, useRef, useState, memo } from "react";

type TradingViewAdvancedChartProps = {
  coinChart: string;
  theme: string;
};

function TradingViewAdvancedChart({ coinChart, theme }: TradingViewAdvancedChartProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const chartWrapper = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Clear previous content to avoid duplicates
    if (container.current) {
      container.current.innerHTML = "";
    }

    // Create and append script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "${coinChart}",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "${theme}",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": false,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current?.appendChild(script);

    // Cleanup to avoid duplicate scripts
    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, [coinChart, theme]);

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      chartWrapper.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div ref={chartWrapper} className="relative w-full h-full">
      {/* Fullscreen Button */}
      <button
        onClick={toggleFullscreen}
        className="absolute top-2 right-2 bg-gray-800 text-white px-3 py-1 rounded-lg z-50"
      >
        {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
      </button>

      {/* TradingView Chart */}
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        ></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewAdvancedChart);
