"use client"
import { useState } from "react";
import CollapsibleList from "./sections/CollapsibleList";
import Header from "./sections/Header";
import BodyGuidanceCenter from "./sections/bodyGuidanceCenter/BodyGuidanceCenter";


export default function GuidanceCenterView() {
  const [activeKey, setActiveKey] = useState<string | null>("video_tutorial");

  return (
    <div className="flex w-full flex-col">
    <Header />
    <CollapsibleList  activeKey={activeKey} setActiveKey={setActiveKey}/>
    <BodyGuidanceCenter  activeKey={activeKey}/>
    </div>

  )
}
