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


const orbits: Orbit[] = [
  {
      radius: 100,
      speed: 0.5,
      opacity: 0.9,
      images: [
          { src: "https://s3-alpha-sig.figma.com/img/89fe/31c7/9df8fb6bbfd99db1cb18960fb1e8e0e1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzB5iXAAlY42kuL~WS4LxeX4GKxd85lsJOWlpnLi3yRKn2lR6MmM53Ia1L9lwTAmZ4oZ6ZEXUM-aGpw0jyJRkmY8domyqqEhZbJwcQiwKA5fUHI3nzLwC9bXtwQqqUSapMgfWBGfkkqOLXG8dgGJlL1YYhZiKdQFe9XipwOT9bi4o8K4h3jGZCldW9VBH-1HfkCZg-P232AKPOrful8goap7jCjev-V6wHO9MCP8DtJo-eZDDI6FmVhyRoD1VvNMtMu9BLeQHRMRRWH7rBROdwGO1YwGbmnD96qVgZoWBh9GBAspdvXbD0lbiBlfTUvBzrOJtxusx8k2T14loyZAg__", size: 55 },
          { src: "https://s3-alpha-sig.figma.com/img/032d/8a85/d141711c096f32eab25e8a03399d7919?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QnjE~t5sgcafBL13ERAQ-SlRTziW~P6eyIT3Acbm7oxdDQOFAKISDpiREv9zn0EvwF4cMCVfncOisQeCvmWVkKoyfRR7QMLf9uNPqGzOSbalxtOe9hP0PhzyNA2TPI3H60wmel6bYE69Gu8qsA8tEJ5dNmC3xhAR46ErR2LujCJEtqpeSEeqSK38DCCIFMRa0cYZuLBW6CwU0AcPwLiKZ38E3CkjtjAGwj-LNayQ1GAwdI4bvzwkRus0OPIXr6RyQAlts~q7WgOtg9kfoml9uwipP29h3YD3aXf8uzhhVMAxWJimgAQ~WMnuR9FGnL2UcAHSm-0xzL4V9ovQ0bRzng__", size: 45 },
      ],
  },
  {
      radius: 226,
      speed: 0.4,
      opacity: 0.8,
      images: [
          { src: "https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UgMgbTosnVPsAmwPd2ezrwgYbkQWKkfUpalR~O0h1qRY5Ihb29N430mZMiv1WEPks5aFWIEaW2LeCjUhyuoGBJW6yqNCBnV7hj4A1Yrc1x2O39A6VG~zTtUWsjDJyrNsy0xd3b0g0zYbR3SWgavn44-JNrZrIEA5tbwivB3192t8vdWvw6nuZ84-BtZrxp4KcgUmIP0UWX~zwOHvtkzGC4HvIiJvtcxhqSkawMBpTY7qU22aDV9tViaLsQ4C1Wr0XiGaMoC6g-SOaSJr-D9XtjItNlEja3YNWQuA~U~X3ZthRky2RjqHgoOPnPtm7ukmjVUNbMFHVLOm74L6nqVVIw__", size: 55 },
          { src: "https://s3-alpha-sig.figma.com/img/ebd9/fba1/691af02d3a7ca8be2811716f82d9212b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UvqYnm9godktv2eajzLjqUYFuK-5u2TldhJRhPPm3ojC6UNaWbfmxervM2Ny2eWi-9BjGvsGtDPk8c9XvckfhKDK0gwXGwxiTyIaHrlRw-qS53MCU0rMZeR-d-Cv7D1mdWuCwrpQkUrEmlnlDZlwtueiYuSz9UyRRR-zCw8II4fjIGDLDwz0z~B8ZoHx6EuKwFe~MsgEtvbGB34X-1-5Y9iYySDDX2K30cqbskpjOeljpcBC68H66RSnK7sujIFm0MtXF7myd6WvyfnXNyU-hb25gJhQ1Z8O9EFMvIS5fPEfIX1sFiGfOafSifQHAAhqe7iBFuV-wUDQVGsIXQeg5w__", size: 75 }
      ],
  },
  {
      radius: 352,
      speed: 0.3,
      opacity: 0.7,
      images: [
          { src: "https://s3-alpha-sig.figma.com/img/cc50/918a/135ade981f1f6c8244faf50d3e2eeaa6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B2Oyv-N1WH5MMJzQBLugGodhTRQg0~OK3SnoJph6xTEj4LAB-YiwGM-05h4QSD8cIUipcrl2G~VGiwrSoRuvsCAg2uNQRHKO8kv-6XUFYYGU~znZF9XopahfZitfjCE~apJsXw9ny4ojUggFNQJ0mnqBqstPQXALG7LhsmvflKcd9zUAZRuI9wYg4g-APmp5juhb0jUWThyaicejE-HT31W9kbb-Z0wt2pe0zAvVwQbwP-BYZDf7ljuuR3X0tww3sF9UDbt7rUpMp4NzqBcMPoGs-1jpycfu4a0p8iMwnLHYxioCaYVpalxmHn2vGtUTKX7MBVEf4GM2GvszSAJuGw__", size: 85 },
          { src: "https://s3-alpha-sig.figma.com/img/d3b2/1420/be0c601433a270f2eab8f555d444da52?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vzfjwxud7m8Yc2Q1cpPpPGHm6cNKRYlOwQHtCwLIK1~9iSI-erPnmzwwreTEPQP7tW3S-qM9UdM8ssNvvxDqRS90IaBGqxDhiZ1aQrzMQMn-dJrtutFxcYjH07zrmyLs4s3R2jP9jvUykqVW0-0YSPlOI7UOPLvx4kcBnm1ziuMyuFPHwxZp8~3umDaVupahUoJPDnFtn8khOGebFJdklpf0x5osuU-RFi5NCcf-0RY2vVXO1p0JPR9gWJ8l5yS6I5yyO-6tZWqMHqBqZrM7BJUBbBa4QMg-aDQ1fZOqsFcVefiMBAVyXSXWbY7hVg4v5D2cVg1MUw0UG2eNJLoyDw__", size: 81 },
      ],
  },
  {
      radius: 478,
      speed: 0.2,
      opacity: 0.6,
      images: [
          { src: "https://s3-alpha-sig.figma.com/img/89fe/31c7/9df8fb6bbfd99db1cb18960fb1e8e0e1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVzB5iXAAlY42kuL~WS4LxeX4GKxd85lsJOWlpnLi3yRKn2lR6MmM53Ia1L9lwTAmZ4oZ6ZEXUM-aGpw0jyJRkmY8domyqqEhZbJwcQiwKA5fUHI3nzLwC9bXtwQqqUSapMgfWBGfkkqOLXG8dgGJlL1YYhZiKdQFe9XipwOT9bi4o8K4h3jGZCldW9VBH-1HfkCZg-P232AKPOrful8goap7jCjev-V6wHO9MCP8DtJo-eZDDI6FmVhyRoD1VvNMtMu9BLeQHRMRRWH7rBROdwGO1YwGbmnD96qVgZoWBh9GBAspdvXbD0lbiBlfTUvBzrOJtxusx8k2T14loyZAg__", size: 99 },
          { src: "https://s3-alpha-sig.figma.com/img/f6e4/02df/f94d91c8643f6698b126e7dec5854350?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hgkjryH9RGlmZZ9qLQioFNvpjjVjED3L8OhP2L65AVGPnI5gJMhx4Qmt-L272jS3nK-TszEOLH3RusHcj3vATy2WT3qOmRIJ87m36xBsCMof2iNpso5HwEF43xb3D2x61iIFbOOMxHoYToVIrPW-0-Z4E3F5VtXWy33npO9OrQaydMnNHytZu5DU3Iq89Gt3j9MKRAvGby3R4QmdS1tVINaU7nQdMl4O099UMp6B7E5pxlhjpuOO4E0b1zrbS1QlpKSTSUUz1hEVVznwbF4XtrD75jZgv2dtm5XZ5IchjNjYV7PYi-QJL6ODWHUAvZnrWPiw84NQu3XAcgrQjMueJw__", size: 105 },
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