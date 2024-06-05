import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css'; // Ensure Tailwind CSS is imported here
import logo from '../assets/images/customers/DivarLogo.png'
const CompanyLogosSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const logos = [
        { id: 1, src: logo, alt: 'Company 1' },
        { id: 2, src: logo , alt: 'Company 2' },
        { id: 3, src: logo, alt: 'Company 3' },

    ];

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h5 className='text-4xl font-extrabold text-[#EE6621] mb-9 mt-5 sm:text-4xl lg:text-4xl'> مشتریان ما</h5>
            <Slider {...settings}>
                {logos.map(logo => (
                    <div key={logo.id} className="p-2">
                        <div className="bg-white p-4 rounded shadow-md flex items-center justify-center h-32 w-32 mx-auto">
                            <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CompanyLogosSlider;
