import CoinsSchema from "@/schemas/Coin-Schema";
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
