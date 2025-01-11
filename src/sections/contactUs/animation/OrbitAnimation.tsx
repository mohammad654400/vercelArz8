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
      speed: 0.2,
      opacity: 0.9,
      images: [
          { src: "https://s3-alpha-sig.figma.com/img/032d/8a85/d141711c096f32eab25e8a03399d7919?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EwkQUPZOn~BW~MeeRu1yJUa97FF~IUxbyZXBv4h36pzFaWliaaabfe9PSQDTWj4Kkau6y2sumi2ylcGA7FCeatOH-46bM3HNd9wz6ij0g16pIzz7~LJdfhgIBjtnL49pfMcx6lO~bJ5n5jrj~OBKSnrrNdnfDmUpsdu7YVS95Tr-KjLepeOD46h9qrDtTN3aLjwYwU2TrYT9cn1QmmOTOSHWGcZ9cMNdJRLqIBA~DUO8MvWdTPDcYMA-gb7NJW-ARDV3VETDyVJZYkaS0ee2lu4jOuhMiziIhOu2gdb2jWej0j~t6lLzsXUmlLnoN-g8bf2FBV1jR-9AStIIQaYzIA__", size: 55 },
          { src: "https://s3-alpha-sig.figma.com/img/ebd9/fba1/691af02d3a7ca8be2811716f82d9212b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dM0MY5uO9fWXrE3zC~uKDFv5j3poxaJJFDqmdIErV5LPVTcgNgcDE4cGfi17xl6WolN4qfzGOaRq46TD0XVAZcQ6v0cBp4ynumNfaSGG6yW8s3PBhvGImppz5si78eejHQpE8aSluKa8A54TAh8yauGIHuGucjEbEkTzqOMi8WhTTV6GkTis75MvC~e2JYYhBmJua4lgcfpk0pIa-8jme2TW6DGF17bXM7y-YvhWjIdiDBrRUWbHZG2XIJfBKrGAQXONdSP0usw5t~9nyiStIWt05Glocr5j8tO7JiosH8W9YRmS4CbMzH8ooVthQJehpkLPXTkE-5-83zOlBqSihQ__", size: 45 },
      ],
  },
  {
      radius: 226,
      speed: 0.13,
      opacity: 0.8,
      images: [
          { src: "https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K56014Jc2vZ4RFNnLUjGzBYuI8-JZw7116pTaRLhnSaXbk2xragD690WmRxqNA8lfGYvypR5CivAhmq9-CGsrdTn21ikIdXPXyiyoORDlFf7HTny0g7E2ajnY9iYSJBFI0KsjlxJlkwNXepS3rcQoTchXfTa6C3uIgo0m7zUN2hOzNnfs9D0weH7RdFJD154raayswBNcKLlLOOIRoIoxTCEpIyBDrTisrK5OCaqYgqd~c~iGe9TQ5~KthX6Ps9Ag9~Gnuy7PH69NOKXzdYaJknd6ydASw603pD003r3XrTEU5XqntzBLzgiia3VFjxgoHiYBpDbOQgqNoPU5R9KSA__", size: 55 },
          { src: "https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K56014Jc2vZ4RFNnLUjGzBYuI8-JZw7116pTaRLhnSaXbk2xragD690WmRxqNA8lfGYvypR5CivAhmq9-CGsrdTn21ikIdXPXyiyoORDlFf7HTny0g7E2ajnY9iYSJBFI0KsjlxJlkwNXepS3rcQoTchXfTa6C3uIgo0m7zUN2hOzNnfs9D0weH7RdFJD154raayswBNcKLlLOOIRoIoxTCEpIyBDrTisrK5OCaqYgqd~c~iGe9TQ5~KthX6Ps9Ag9~Gnuy7PH69NOKXzdYaJknd6ydASw603pD003r3XrTEU5XqntzBLzgiia3VFjxgoHiYBpDbOQgqNoPU5R9KSA__", size: 75 }
      ],
  },
  {
      radius: 352,
      speed: 0.16,
      opacity: 0.7,
      images: [
          { src: "https://s3-alpha-sig.figma.com/img/d3b2/1420/be0c601433a270f2eab8f555d444da52?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sq5mJA4a8OBsvNClU0zP1PiBmC9AGTVL93irWqybEOYJpY2ofJXPw6q0AocNUzkwiTV7vF3gmRETi-I7tarRXgE0-~E16qH~sYJsJVBdf8TZzEzdTJ1X6nmxNrggxGuYW~PB2zoYqvpTmXzyjppzz03aCzO5OOsh5j~DWblikUjU1oPl6allYHpPIMbzE~NTcFLFqdboSn3mPYp5d5UjrLgFZKBmdvq2wBAmGaTCQehIOXGWhNmhqUXh6lNRTpRqnnzp~prc98jbGReSyaxzTgp9Yurnvj0xj2mE-wDX74QNZdrCrVkrD1ljPQNwnOisj1RlxkfQXpMNze4ubEz93Q__", size: 85 },
          { src: "https://s3-alpha-sig.figma.com/img/cc50/918a/135ade981f1f6c8244faf50d3e2eeaa6?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CUk3sQRKJ3Mylz710ij-m2j1lvOQkJi3hoyviShy6eu1SWQCmJRpH7rFTHcax2t31Hq1jurR-8mh5T71ynV3jqaBT1K1yJ-QJXvBYxCxGwg4MGzvZjIbMJyQvxb9ZVx43LiQcWcnSuwAc06h2V-37ZfUXLpL1AIlGPlWI3-qYlKfB3E~NXUUU7kyOrwOT5vAzTvA4DRZ~oNgjhZy4ffmtVf84faal3PAmm2pNBQt1IAg73PY9YFrrodz6p650mfP0jmu6eYZDcKghaMljZYWFbJdH5-Gow0tzniQwDz42sySzdtzuJ0eBjWh9Hb4~vAX-SCqHE~1VeniBTNACxghcg__", size: 81 },
      ],
  },
  {
      radius: 478,
      speed: 0.1,
      opacity: 0.6,
      images: [
          { src: "https://s3-alpha-sig.figma.com/img/f6e4/02df/f94d91c8643f6698b126e7dec5854350?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agxsK-T86vLVLzoX0vw1drwhUDsgsTu4NT-zvtWBnkSemMtSN8aSjyovZA6MU5fGqSJyS4iq17v~aRKtzRNNQl3TSaOHJr3SqDqjwKwfSHJKEXagaFHCZrBokPdfIa1FHV06XzGkyuB7WRnfcvFCqkvX8FD9t0x3zDc1dSsWkdp~AfipEs6BOnKqtp7k~gEPXFxvHPO6kkNxiUePwIXJ2kasWIZG3ayclDZCH56ZgCap4JBv3Ikw9p4LpXjLS1YhwbKETRRLGHoGit3I~7EvxipFzeiQ8tlEVvXOgTPqWX31LeRRm7n8q1dfWsTtaQ0CpZTAxlVDcMJifE0qv6KP0A__", size: 99 },
          { src: "https://s3-alpha-sig.figma.com/img/89fe/31c7/9df8fb6bbfd99db1cb18960fb1e8e0e1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oVLQClSIjStksITm0WTxxOvg5~SOHDMcr3XRBkgppQJQ9J9WGOFqUNRC723O94uSq6MYxz-9o~ID1dbd2NkrhtMCUtD2Skd2u1MMlo2bVjm9t3JTcvz2KmL-ukHOJkUKaFqTn9v2JfQInEzy7FbeWb2aTQDKUzJqLeBFtHGjmtGXMdH9tIAej97eFomfkxjfSXhawq1Au8q88qnOdXcisg~ECLPeIq-viY9IUBpaaVnm3-bAdCnyV6nIMU-cC6sZE~mI4wDNuoT8ICU17vWv3dZ9ChllbURjeIEodhcdmpC-dEDm6CVVWq4qVrctUqtbau2pshGvGwaxzybAV0Nd9Q__", size: 105 },
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