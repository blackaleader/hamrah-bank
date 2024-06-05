import React from 'react';
import frame from '../assets/images/Frame2.png';
import card1 from '../assets/images/card.png';
import card2 from '../assets/images/card2.png';


// import downloadIcon from '../assets/images/download.svg';

const HeroSection2 = () => {
    return (
        <section className="bg-gray-50 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start rtl">
                    {/* Swap the order of these two divs */}
                    <div className="relative lg:w-1/2 lg:order-1 mb-8 lg:mb-0">
                        <img
                            className="absolute  mr-24  -my-6"
                            src={frame}
                            alt="Poster"
                        />
                        <img
                            className="absolute  h-auto"
                            src={card1}
                            alt="card1"
                        />
                        <img
                            className="absolute right-60 top-64 "
                            src={card2}
                            alt="card2"
                        />
                    </div>
                    <div className="lg:w-1/2 lg:order-2 lg:pl-12 text-right">
                        <h1 className="text-4xl font-extrabold text-[#EE6621] sm:text-5xl lg:text-6xl">
                        همراه بانک
                        </h1>
                        <h1 className="text-4xl mt-10 font-extrabold text-[#061337] sm:text-4xl lg:text-4xl">
                            لورم ایپسوم، لورم
                        </h1>
                        <p className="mt-16 w-[75%] text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                        <div className="mt-52 lg:text-right mt-48 justify-end">
                            <a
                                href="#services"
                                className="px-8 py-2 bg-[#F5A67E] text-white text-lg font-medium rounded-md hover:bg-[#F5A67E] focus:outline-none focus:bg-[#F5A67E]"
                            >
                                افتتاح حساب
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection2;
