import CoinsSchema from "@/schemas/CoinSchema";
import Coin from "@/sections/coin/coin";
import React from "react";

export default function CoinsPage() {
  return (
    <>
      <CoinsSchema />
      <Coin />
    </>
  );
}
