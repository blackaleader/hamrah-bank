import React from 'react';
import { useState, useEffect } from "react";
import logo from 'C:/Users/Leader/Desktop/github desktop/hamrah-bank2/src/assets/images/logo.png';

// import {Link, NavLink} from "react-router-dom"

const MainNavbar = () => {

    const [isOpenNav, setIsOpenNav] = useState(false);

    useEffect(() => {
    }, []);

    function toggleNavbar(){
        if(isOpenNav){
            setIsOpenNav(false);
        }else{
            setIsOpenNav(true);
        }
    }
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                <div className="flex items-center justify-between h-20">
                    {/* Button */}

                    <div className="flex-shrink-0]">
                        <img className="max-h-16 w-auto" src={logo} alt="Logo"/>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-5 flex items-baseline space-x-4">
                            <a href="#"
                               className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">اهداف</a>
                            <a href="#"
                               className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">خدمات</a>
                            <a href="#"
                               className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">ویژگی
                                ها</a>
                            <a href="#"
                               className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">درباره
                                ما</a>
                            <a href="#"
                               className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">تماس
                                با ما</a>
                        </div>
                    </div>
                    <div
                        className="RegisterBtn w-56 h-2/3 pl-5 pr-7 pt-2 pb-2.5 bg-[#F5A67E] rounded-2xl border-2 justify-center items-center inline-flex">
                        <div className=" text-white text-xl font-bold font-['IRANYekanFN'] ">بازکردن حساب بانکی</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNavbar;