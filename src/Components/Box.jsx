import React from 'react';
import ticket from '../assets/images/Ticket.svg'
const CommentSection = () => {
    return (
        <section className="bg-[#FCE8DE]  py-16 sm:py-24">
            <div className="text-lg font-medium text-center text-gray-800">
                <h5 className="mb-9 text-2xl font-bold"><span className="text-[#EE6621] text-2xl font-bold">بانک</span> لورم ایپسوم متن ساختگی!</h5>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center">
                    {/* Box 1 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white shadow rounded-lg p-6   flex flex-col items-center justify-center ">
                            <div className='justify-center content-center'>
                                <img src={ticket} alt='ticket' className=''></img>
                            </div>
                            <h5 className='text-xl text-center font-extrabold my-5'>وام بدون ضامن</h5>
                            <p className="text-lg text-center font-medium text-gray-800">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                            </p>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white shadow rounded-lg p-6   flex flex-col items-center justify-center ">
                            <div className='justify-center content-center'>
                                <img src={ticket} alt='ticket' className=''></img>
                            </div>
                            <h5 className='text-xl text-center font-extrabold my-5'>وام بدون ضامن</h5>
                            <p className="text-lg text-center font-medium text-gray-800">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                            </p>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white shadow rounded-lg p-6   flex flex-col items-center justify-center ">
                            <div className='justify-center content-center'>
                                <img src={ticket} alt='ticket' className=''></img>
                            </div>
                            <h5 className='text-xl text-center font-extrabold my-5'>وام بدون ضامن</h5>
                            <p className="text-lg text-center font-medium text-gray-800">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                            </p>
                        </div>
                    </div>

                    {/* Box 4 */}
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white shadow rounded-lg p-6   flex flex-col items-center justify-center ">
                            <div className='justify-center content-center'>
                                <img src={ticket} alt='ticket' className=''></img>
                            </div>
                            <h5 className='text-xl text-center font-extrabold my-5'>وام بدون ضامن</h5>
                            <p className="text-lg text-center font-medium text-gray-800">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommentSection;
