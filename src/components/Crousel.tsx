"use client";
import Image from "next/image";
import image1 from "../public/s1.jpg";
import image2 from "../public/s2.jpg";
import image3 from "../public/s3.jpg";
import image4 from '../public/s4.jpg';
import image5 from '../public/s5.jpg';
import image6 from '../public/s6.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Interface for image data
import Slider from "react-slick";
export default function Crousel(){
      let data = [
          {
              img: image1,
              },
          {
              img: image2,
             },
          {
              img: image3,
             },
          {
              img: image4,
             },
          {
              img: image5,
             },
          {
              img: image6,
             },
      ]
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          autoplay:true,
          responsive: [
              {
                  breakpoint: 1100,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true,
  
                  }
              }
          ],

          customPaging: (i: number) => (
              <div className='-mt-2 text-xs opacity-0'>{i}</div>
          ),
      };
      return (
          <div className='mt-10 w-full lg:pl-56 lg:pr-56'>
              <Slider {...settings} className='w-full'  >
                  {
                      data.map((val, index) => {
                          return (
                              <div className='px-3 xl-lg:px-1 group mb-2 md:mb-5  relative overflow-hidden cursor-pointer outline-none' key={index}>
                                  <div className='relative bg-slate-900 rounded-lg overflow-hidden'>
                                      <Image src={val.img} className='w-full h-[200px]  md:h-[400px] object-cover' alt="c"/>
                                  </div>
                              </div>
                          )
                      })
                  }
              </Slider>

          </div>
      );
  }
