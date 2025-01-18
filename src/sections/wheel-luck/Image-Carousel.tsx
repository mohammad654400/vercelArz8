import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from "@/assets/icons/wheel/arrowLeft";
import ArrowRight from "@/assets/icons/wheel/arrowRight";

interface ImageCarouselProps {
  imageUrls: string[];
}

interface ArrowProps {
  onClick?: () => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imageUrls }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="relative w-full rounded-[20px] overflow-hidden">
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index} className="px-2">
            <div className="w-full h-full rounded-[20px]  overflow-hidden shadow-lg">
              <img
                src={url}
                alt={`Slide ${index}`}
                className=" w-full overflow-hidden"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white w-8 h-8 rounded-full flex items-center justify-center z-10"
      onClick={onClick}
    >
      <ArrowRight />
    </button>
  );
};

const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white w-8 h-8 rounded-full flex items-center justify-center z-10"
      onClick={onClick}
    >
      <ArrowLeft />
    </button>
  );
};

export default ImageCarousel;
