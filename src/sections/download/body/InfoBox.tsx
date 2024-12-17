import React from "react";

import { cardData } from "../data/data";


export default function InfoBox() {
    return (
        <div className="flex flex-col w-full -mt-10 lg:mt-14">
            <div className="hidden md:flex flex-col w-4/5 max-w-[600px] mb-10 self-center">
                <h1 className="flex justify-center text-3xl font-bold text-sixth">
                    برخی امکانات اپلیکیشن صرافی ارز هشت
                </h1>
                <hr className="border-t-4 border-primary mt-2" />
            </div>


                  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  w-full grid-flow-row-dense  mt-[30px]">
                    {cardData.map((card, index) => (
                      <div
                        key={index}
                        className="flex flex-col  rounded-xl bg-third justify-center items-center py-5 lg:py-0 h-60 sm:h-80 w-full mx-auto max-w-[400px]"
                      >
                        <div className="h-20 w-20 sm:h-24 sm:w-24 mb-6">
                          <card.icon />
                        </div>
                        <span className="text-lg sm:text-base lg:text-lg xl:text-xl font-semibold text-seventh mb-2">
                          {card.title}
                        </span>
                        <span className="text-xs  font-normal text-sixth opacity-50 text-center px-8"style={{lineHeight:"1.5rem"}}>
                          {card.description}
                        </span>
                      </div>
                    ))}
                  </div>


        </div>

    );
}
