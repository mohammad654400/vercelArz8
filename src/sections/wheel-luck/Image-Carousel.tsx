
import { useEffect, useState, useCallback } from 'react';
import ArrowRight from '@/assets/icons/wheel/arrowRight'; 
import ArrowLeft from '@/assets/icons/wheel/arrowLeft';   
import ImageOne from '@/assets/images/wheelluck/ImageOne.png'
import ImageTwo from '@/assets/images/wheelluck/ImageTwo.png'
import ImageThree from '@/assets/images/wheelluck/ImageThree.png'
import ImageFour from '@/assets/images/wheelluck/ImageFour.png'
import ImageFive from '@/assets/images/wheelluck/ImageFive.png'
import ImageSix from '@/assets/images/wheelluck/ImageSix.png'
import ImageSeven from '@/assets/images/wheelluck/ImageSeven.png'
import ImageEight from '@/assets/images/wheelluck/ImageEight.png'
import ImageNine from '@/assets/images/wheelluck/ImageNine.png'

const imageUrls = [
  ImageOne.src,
  ImageTwo.src,
  ImageThree.src,
  ImageFour.src,
  ImageFive.src,
  ImageSix.src,
  ImageSeven.src,
  ImageEight.src,
  ImageNine.src,
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  }, [imageUrls]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
  }, [imageUrls]);

  const currentImage = imageUrls[currentIndex];
  const prevImage = imageUrls[(currentIndex - 1 + imageUrls.length) % imageUrls.length];
  const nextImage = imageUrls[(currentIndex + 1) % imageUrls.length]; 

  const imageClass = "w-full h-full object-cover rounded-[16px] lg:rounded-[21px]";

  return (
    <div className="relative w-full h-full">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white w-8 h-8 rounded-full flex items-center justify-center z-10"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white w-8 h-8 rounded-full flex items-center justify-center z-10"
      >
        <ArrowRight />
      </button>

      <div className="overflow-hidden relative w-full h-full">
        <div className="flex transition-all duration-500">
          
          <div className="w-[49.89px] lg:w-[62.88px] h-[479px] lg:h-[604px] flex-shrink-0 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[#242428] to-[#20202000] rounded-[16px] lg:rounded-[21px]" />
            <img src={prevImage} alt="Previous" className={imageClass} />
          </div>

          
          <div className="lg:w-[340.67px] w-[270px] h-[479px] lg:h-[604px] flex-shrink-0 relative mx-[10px]">
            <img src={currentImage} alt="Current" className={`${imageClass} lg:rounded-[27px]`} />
          </div>

          <div className="w-[49.89px] lg:w-[62.88px] h-[479px] lg:h-[604px] flex-shrink-0 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#242428] to-[#20202000] rounded-[16px] lg:rounded-[21px]" />
            <img src={nextImage} alt="Next" className={imageClass} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
