import React, { useState } from 'react';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        province: '',
        city: '',
        address: '',
        nationalCode: '',
        postalCode: '',
        phoneNumber: '',
        mobileNumber: '',
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Perform form submission logic here
    };

    return (
        <div className="min-h-screen  flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-[#FCE8DE]   p-32 rounded-t-[18%] rounded-b-3xl shadow-md">
                <h5 className='text-3xl  text-center mb-10 font-extrabold text-[#EE6621] sm:text-3xl lg:text-3xl'>افتتاح حساب بانکی</h5>

                <div className="grid grid-cols-2  col-span-full gap-x-16">
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700">نام</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="نام خود را وارد کنید"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700">نام خانوادگی</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="نام خانوادگی خود را وارد کنید"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="province" className="block text-gray-700">استان</label>
                        <input
                            type="text"
                            id="province"
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="استان خود را وارد کنید"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700">شهر</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="شهر خود را وارد کنید"
                            required
                        />
                    </div>
                    <div className="mb-4 col-span-2">
                        <label htmlFor="address" className="block text-gray-700">آدرس</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="آدرس خود را وارد کنید"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="nationalCode" className="block text-gray-700">کدملی</label>
                        <input
                            type="text"
                            id="nationalCode"
                            name="nationalCode"
                            value={formData.nationalCode}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="کدملی خود را وارد کنید"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="postalCode" className="block text-gray-700">کدپستی</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="کدپستی خود را وارد کنید"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-gray-700">شماره تلفن</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="شماره تلفن خود را وارد کنید"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobileNumber" className="block text-gray-700">شماره موبایل</label>
                        <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="شماره موبایل خود را وارد کنید"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-gray-700">انتخاب جنسیت</label>
                        <div className="flex items-center">
                            <label htmlFor="male" className="mr-2">مرد</label>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <label htmlFor="female" className="mr-2">زن</label>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                onChange={handleChange}
                                className="mr-2"
                            />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-[#F5A67E] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            ثبت نام
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;

