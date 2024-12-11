import Image from "next/image";
import React, { use } from "react";
import user from "@/assets/images/user.png";
import AllBugBountyIcon from "@/assets/icons/bugbounty/allBugBounty";
const data = [
    { id: 1, name: "علیرضا بهلول", amount: "100,000,000 تومان" },
    { id: 2, name: "علیرضا بهلول", amount: "100,000,000 تومان" },
    { id: 3, name: "علیرضا بهلول", amount: "100,000,000 تومان" },
    { id: 4, name: "علیرضا بهلول", amount: "100,000,000 تومان" },
    { id: 5, name: "علیرضا بهلول", amount: "100,000,000 تومان" },
    { id: 6, name: "علیرضا بهلول", amount: "100,000,000 تومان" }
];
export default function BugBountyCard() {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      {data.map((data) => (
        <div key={data.id} className="w-[590px] h-[145px] bg-secondary">
          <div className="flex gap-4 p-5 items-center border-b-2 b">
            <Image alt="user" src={user} className="rounded-full" />
            <div>
              <p>{data.name}</p>
              <p>{data.amount}</p>
            </div>
          </div>
          <div className="pr-5 pt-2">
            <AllBugBountyIcon />
          </div>
        </div>
      ))}
    </div>
  );
}
