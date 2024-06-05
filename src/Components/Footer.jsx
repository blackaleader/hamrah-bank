import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';
import icon1 from '../assets/images/icon1.svg'; // Replace with actual paths
import icon2 from '../assets/images/icon2.svg'; // Replace with actual paths
import icon3 from '../assets/images/icon3.svg'; // Replace with actual paths
import apple from '../assets/images/apple.svg'; // Replace with actual paths
import web from '../assets/images/web.svg'; // Replace with actual paths
import android from '../assets/images/android.svg'; // Replace with actual paths
import '../fonts/Qs_Iranyekan extrablack.ttf'
import location from '../assets/images/location.svg';
import phone from '../assets/images/phone.svg';

export default function App() {
    return (
        <MDBFooter className='text-center text-lg-left mt-14 bg-[#F5A67E]'>
            <MDBContainer className='pt-11'>
                <MDBRow className='flex justify-between mx-60'>
                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-right mb-7 text-5xl font-extrabold'>بانک</h5>

                        <ul className='list-unstyled '>
                            <li>
                                <p className="w-80 my-2 text-right text-slate-900 text-3xl font-medium font-['IRANYekanFN']">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                </p>
                                <div className="w-64 h-14 flex  pt-2.5 pb-2 bg-slate-900 rounded-2xl border-2 -mr-2 ">
                                    <img src={android} alt="Icon 1" className='w-8 h-8 mr-4'/>
                                    <div className="text-white mr-4 text-xl font-medium ">دریافت
                                        اندروید
                                    </div>
                                </div>
                                <div className="w-64 flex h-14 my-3  pt-2.5 pb-2 bg-slate-900 rounded-2xl border-2 -mr-2 ">
                                    <img src={apple} alt="Icon 1" className='w-8 h-8 mr-4'/>
                                    <div className="text-white text-xl font-medium mr-4 ">دریافت
                                        اندروید
                                    </div>
                                </div>
                                <div className="w-64 h-14  flex pt-2.5 pb-2 bg-slate-900 rounded-2xl border-2 -mr-2 ">
                                    <img src={web} alt="Icon 1" className='w-8 h-8 mr-4'/>
                                    <div className="text-white text-xl font-medium mr-4 ">دریافت
                                        اندروید
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4  mr-32 mb-md-0'>
                        <h5 className='text-uppercase text-right mb-7 text-4xl font-bold '>لینک ها</h5>

                        <ul className='whitespace-nowrap space-y-5 text-2xl font-medium text-right'>
                            <li>
                                <a href='#!' className='text-dark pb-2'>
                                    بانک
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    قوانین و مقرارت
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    سوالات متداول
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    سامانه شکایات
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    درباره ما
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol  className='mr-10 '>
                        <ul className='space-y-5 whitespace-nowrap mr-4'>
                            <li className='mt-14  text-right'>
                                <a href='#!' className='text-dark text-right pb-2 text-2xl mt-6 '>
                                    بانک
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark text-2xl mt-6'>
                                    قوانین و مقرارت
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol  className='mb-4 mr-32 mb-md-0'>

                            <h5 className='text-right whitespace-nowrap font-bold text-4xl'>تماس با ما</h5>
                        <ul className='list-unstyled'>
                            <li>

                                <div className='my-10'>
                                    <div className='flex mt-10 my-3 '>
                                        <img src={location} alt="Icon 1"/>
                                        <p className="text-right text-3xl mr-2">آدرس</p>
                                    </div>
                                    <div className='text-right text-lg whitespace-nowrap    '>
                                        تهران، میدان تهران، خیابان تهران، کوچه تهران، پلاک 202
                                    </div>
                                </div>

                                <div className='my-10'>
                                    <div className='flex mt-10 my-3 '>
                                        <img src={phone} alt="Icon 1"/>
                                        <p className="text-right text-3xl mr-2">تلفن پشتیبانی</p>
                                    </div>
                                    <div className='text-right text-xl mt-5 font-bold  whitespace-nowrap    '>
                                        021-88556677
                                    </div>
                                </div>
                            </li>


                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBRow className='mx-5 flex justify-end  ml-32'>
                <MDBCol size='auto'>
                    <img src={icon1} alt="Icon 1" className='w-8 h-8'/>
                </MDBCol>
                <MDBCol size='auto'>
                    <img src={icon2} alt="Icon 2" className='w-8 h-8 ml-10 mr-10'/>
                </MDBCol>
                <MDBCol size='auto'>
                <img src={icon3} alt="Icon 3" className='w-8 h-8' />
                </MDBCol>
            </MDBRow>
            <div className='text-right p-5 mx-5 flex'>
                <svg className="ml-3" width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.487048 3.94915V15.5731C0.487048 15.5731 0.487048 15.5773 0.487048 15.5786C0.492566 18.2229 1.72573 20.5844 3.64443 22.1252C3.67754 22.161 3.71478 22.19 3.75478 22.2121C5.17968 23.3183 6.96597 23.979 8.90536 23.979C13.5483 23.979 17.3251 20.2023 17.3251 15.5593V4.52986C17.3251 4.28296 17.1251 4.08295 16.8781 4.08295H13.1414C12.8945 4.08295 12.6945 4.28296 12.6945 4.52986V9.08318L10.9717 9.95908V0.460711C10.9717 0.213803 10.7717 0.0137939 10.5248 0.0137939H6.78803C6.54112 0.0137939 6.34111 0.213803 6.34111 0.460711V12.3095L5.11347 12.933V3.94915C5.11347 3.70224 4.91346 3.50223 4.66655 3.50223H0.929827C0.68292 3.50223 0.48291 3.70224 0.48291 3.94915H0.487048ZM8.90674 23.0866C7.40461 23.0866 6.00454 22.6438 4.82794 21.881L16.4271 15.8435C16.2767 19.863 12.9621 23.0866 8.90674 23.0866ZM16.434 14.8338L4.03342 21.2893C3.27062 20.6396 2.63887 19.8423 2.18368 18.9402L16.434 11.8654V14.8324V14.8338ZM16.434 10.8695L1.83056 18.1195C1.56986 17.4008 1.41399 16.6325 1.38502 15.8311L16.434 8.18658V10.8695ZM13.5897 4.97678H16.434V7.18516L13.5897 8.62936V4.9754V4.97678ZM7.23632 0.907628H10.0806V10.4129L7.23632 11.8571V0.907628ZM4.22377 4.39469V13.3868L1.3795 14.831V4.39606H4.22377V4.39469Z" fill="#061337"/>
                </svg>
                کلیه حقوق مادی و معنوی این سایت متعلق به بانک است. 1403
            </div>
        </MDBFooter>
    );
}