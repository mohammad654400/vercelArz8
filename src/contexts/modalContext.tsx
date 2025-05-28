'use client'

import React, { createContext, useContext, useState } from "react";

type Crypto = {
  name: string;
  symbol: string;
  icon: string;
  color?: string;
  isFont?: boolean;
  price: {
    buy?: number;
    sell?: number;
  };
  priceChangePercent: string;
};
type CryptoModalConfig = {
  hasLink?: boolean;
  isBuy?: boolean;
  onSelectCurrency?: (currency: Crypto) => void;
};
type CryptoModalContextType = {
  isCryptoModalOpen: boolean;
  openCryptoModal: (config: CryptoModalConfig) => void;
  closeCryptoModal: () => void;
  config: CryptoModalConfig | null;
};

const CryptoModalContext = createContext<CryptoModalContextType | undefined>(undefined);

export const CryptoModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCryptoModalOpen, setIsCryptoModalOpen] = useState(false);
  const [config, setConfig] = useState<CryptoModalConfig | null>(null);
  const openCryptoModal = (modalConfig: CryptoModalConfig) => {
    setConfig(modalConfig);
    setIsCryptoModalOpen(true);
  };
  const closeCryptoModal = () => {
    setIsCryptoModalOpen(false);
    setConfig(null);
  };
  return (
    <CryptoModalContext.Provider value={{ isCryptoModalOpen, openCryptoModal, closeCryptoModal, config }}>
      {children}
    </CryptoModalContext.Provider>
  );
};

export const useCryptoModal = () => {
  const context = useContext(CryptoModalContext);
  if (!context) {
    throw new Error("useCryptoModal must be used within a CryptoModalProvider");
  }
  return context;
};
