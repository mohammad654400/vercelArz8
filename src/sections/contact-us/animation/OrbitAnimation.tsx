"use client";
import { useEffect, useRef } from "react";
import ImageOne from "@/assets/images/contactUs/image-1-1.png"
import ImageTwo from "@/assets/images/contactUs/image-1-2.png"
import ImageThree from "@/assets/images/contactUs/image-2-1.png"
import ImageFour from "@/assets/images/contactUs/image-3-1.png"
import ImageFive from "@/assets/images/contactUs/image-3-2.png"
import ImageSix from "@/assets/images/contactUs/image-4-1.png"
import ImageSeven from "@/assets/images/contactUs/image-4-2.png"


interface OrbitImage {
  src: string;
  size: number; 
}

interface Orbit {
  radius: number;
  speed: number;
  opacity: number; 
  images: OrbitImage[];
}


const orbits: Orbit[] = [
  {
      radius: 100,
      speed: 0.2,
      opacity: 0.9,
      images: [
          { src: ImageOne.src, size: 55 },
          { src: ImageTwo.src, size: 45 },
      ],
  },
  {
      radius: 226,
      speed: 0.13,
      opacity: 0.8,
      images: [
          { src: ImageThree.src, size: 55 },
          { src:ImageSeven.src , size: 75 }
      ],
  },
  {
      radius: 352,
      speed: 0.16,
      opacity: 0.7,
      images: [
          { src: ImageFour.src, size: 85 },
          { src: ImageFive.src, size: 81 },
      ],
  },
  {
      radius: 478,
      speed: 0.1,
      opacity: 0.6,
      images: [
          { src: ImageSix.src, size: 99 },
          { src: ImageSeven.src, size: 105 },
      ],
  },
];


const OrbitAnimation = () => {
  const orbitItemsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !orbitItemsRef.current.includes(el)) {
      orbitItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    function animateOrbit() {
      orbitItemsRef.current.forEach((item) => {
        const orbitIndex = parseInt(item.getAttribute("data-orbit") || "0");
        const angle = parseFloat(item.getAttribute("data-angle") || "0");
        const { radius, speed } = orbits[orbitIndex];

        const newAngle = (angle + speed) % 360;
        const radians = (newAngle * Math.PI) / 180;

        const x = radius * Math.cos(radians) - item.offsetWidth / 2;
        const y = radius * Math.sin(radians) - item.offsetHeight / 2;

        item.style.transform = `translate(${x}px, ${y}px)`;
        item.setAttribute("data-angle", newAngle.toString());
      });

      requestAnimationFrame(animateOrbit);
    }

    animateOrbit();
  }, [orbits]);

  return (
    <div className="relative w-[1068px] h-[1068px] mx-auto rounded-full">
      {orbits.map((orbit, index) => {

        return (
          <div
            key={index}
            className="absolute top-1/2 left-1/2 rounded-full border"
            style={{
              width: `${orbit.radius * 2}px`,
              height: `${orbit.radius * 2}px`,
              transform: "translate(-50%, -50%)",
              borderColor: "bg-foreground",
              opacity: orbit.opacity,
              borderStyle: "solid",
              background: index === 0 ? "radial-gradient(circle, #ffd700, transparent,transparent)" : undefined,
            }}
          ></div>
        );
      })}
      {orbits.map((orbit, orbitIndex) =>
        orbit.images.map((image, imageIndex) => {
          const angleOffset = (360 / orbit.images.length) * imageIndex;
          return (
            <div
              key={`${orbitIndex}-${imageIndex}`}
              ref={addToRefs}
              className="absolute top-1/2 left-1/2"
              data-orbit={orbitIndex}
              data-angle={angleOffset}
              style={{
                width: `${image.size}px`,
                height: `${image.size}px`,
              }}
            >
              <img
                src={image.src}
                alt={`Avatar ${orbitIndex}-${imageIndex}`}
                className="w-full h-full rounded-full border-2 border-white"
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default OrbitAnimation;