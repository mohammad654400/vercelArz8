"use client";
import { useEffect, useRef } from "react";

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

interface OrbitAnimationProps {
  orbits: Orbit[];
}

const OrbitAnimation: React.FC<OrbitAnimationProps> = ({ orbits }) => {
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