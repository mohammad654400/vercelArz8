import React, { useEffect, useRef, memo } from 'react';

type TradingViewSimpleChartProps = {
  coinChart: string;
  theme: string;
}

function TradingViewSimpleChart({ coinChart, theme }: TradingViewSimpleChartProps) {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Clear previous content to avoid duplicates
    if (container.current) {
      container.current.innerHTML = '';
    }

    // Create and append script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          [
            "${coinChart}"
          ]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "colorTheme": "${theme}",
        "autosize": true,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "headerFontSize": "medium",
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1W",
          "60m|1W",
          "all|1M"
        ]
      }`;
    container.current?.appendChild(script);

    // Cleanup to avoid duplicate scripts
    return () => {
      if (container.current) {
        container.current.innerHTML = '';
      }
    };

  }, [coinChart, theme]);
  return (
    <div className="tradingview-widget-container" ref={container} style={{ border: 'none' }}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );

}

export default memo(TradingViewSimpleChart);
