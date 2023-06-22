import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heading from '../../Shared/Heading/Heading';

const Slide = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="slide relative h-[580px]">
          <div className="w-full h-full bg-cover bg-no-repeat bg-top-center" style={{ backgroundImage: `url("https://i.ibb.co/MG0V4K6/Hero-Image.jpg")` }}>
            <div className="overlay absolute top-0 left-0 w-full h-full bg-slate-950 opacity-60" />
            <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <Heading subtitle="WELCOME TO LEARNHUB" title="Best Online Education Expertise" />
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="md:flex mx-0 justify-center gap-5 mt-10">
                <button className="btn btn-outline btn-warning">GET STARTED NOW </button>
                <button className="btn btn-outline btn-warning">VIEW COURSE </button>
              </div>
            </div>
          </div>
        </div>
        <div className="slide relative h-[580px]">
          <div className="w-full h-full bg-cover bg-no-repeat bg-top-center" style={{ backgroundImage: `url("https://i.ibb.co/MG0V4K6/Hero-Image.jpg")` }}>
            <div className="overlay absolute top-0 left-0 w-full h-full bg-slate-950 opacity-60" />
            <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <Heading subtitle="WELCOME TO LEARNHUB" title="Best Online Education Expertise" />
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="md:flex mx-0 justify-center gap-5 mt-10">
                <button className="btn btn-outline btn-warning">GET STARTED NOW </button>
                <button className="btn btn-outline btn-warning">VIEW COURSE </button>
              </div>
            </div>
          </div>
        </div>
        {/* Add more slider items */}
      </Slider>
    </div>
  );
};



export default Slide;
