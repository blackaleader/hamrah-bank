import React from 'react';
import MainNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Hero";
import HeroSection2 from "./Components/Hero2";
import face from './assets/images/face.png'
import CommentSection from './Components/Box';
import RecentlyAskedQuestions  from './Components/QA'
import CompanyLogosSlider from './Components/CompanyLogosSlider'
import RegisterForm from "./Components/Registration";
function App() {
    const currentPath = window.location.pathname;

    if (currentPath === "/register") {
        return (
            <div>
                <div>
                    <MainNavbar/>
                </div>
                <div>
                    <RegisterForm />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
    );
    } else {
        return (
            <div className="App h-screen">
                <div className="">
                    <div className='mb-[25%]'>
                        <MainNavbar/>
                        <HeroSection/>
                        <HeroSection2/>

                        <div className="App ">

                            <RecentlyAskedQuestions/>
                        </div>
                        <div>
                            <div className="h-[400px] bg-[#FCE8DE] flex   items-center justify-center ">
                                <div className='bg-white h-[60%] w-1/5 rounded-xl blur-sm'>
                                    <div className='w-auto h-auto flex items-center justify-center'>
                                        <img className=' scale-50 ' src={face} alt='face'></img>
                                    </div>
                                    <h5 className='text-[#1543C3] text-center font-bold '>امیرعلی یوسفی</h5>
                                    <p className='justify-center mx-5'>واقعا رابط کاربری اپلیکیشن فوق العاده خوب و
                                        راحته. تبریک میگم بهتون من که بی صبرانه منتظر کارت بانکیم هستم.</p>
                                </div>
                                <div className='bg-white h-[60%] w-1/5 rounded-xl '>
                                    <div className='w-auto h-auto flex items-center justify-center'>
                                        <img className=' scale-50 ' src={face} alt='face'></img>
                                    </div>
                                    <h5 className='text-[#1543C3] text-center font-bold '>امیرعلی یوسفی</h5>
                                    <p className='justify-center mx-5'>واقعا رابط کاربری اپلیکیشن فوق العاده خوب و
                                        راحته. تبریک میگم بهتون من که بی صبرانه منتظر کارت بانکیم هستم.</p>
                                </div>
                                <div className='bg-white h-[60%] w-1/5 rounded-xl blur-sm'>
                                    <div className='w-auto h-auto flex items-center justify-center'>
                                        <img className=' scale-50 ' src={face} alt='face'></img>
                                    </div>
                                    <h5 className='text-[#1543C3] text-center font-bold '>امیرعلی یوسفی</h5>
                                    <p className='justify-center mx-5'>واقعا رابط کاربری اپلیکیشن فوق العاده خوب و
                                        راحته. تبریک میگم بهتون من که بی صبرانه منتظر کارت بانکیم هستم.</p>
                                </div>
                            </div>
                        </div>


                        <div className="App">
                            <CompanyLogosSlider/>
                            <Footer/>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
