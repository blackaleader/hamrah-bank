import React, { useState } from 'react';
import icon from '../assets/images/dropbutton.svg'
import icon2 from '../assets/images/dropup.svg'
import '../index.css';

const Question = ({ question, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="border-b border-gray-200 py-4">
            <div className="flex justify-between items-start">
                <p className="text-lg">{question}</p>
                <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
                    {isOpen ? <img src={icon} alt="Collapse" className="h-6 w-6" /> : <img src={icon2} alt="Expand" className="h-6 w-6" />}
                </button>
            </div>
            {isOpen && <p className="mt-2 text-gray-600">{description}</p>}
        </div>
    );
};

const RecentlyAskedQuestions = () => {
    const questions = [
        {
            question: 'چگونه می توانم حساب باز کنم؟',
            description: 'برای باز کردن حساب، باید به نزدیکترین شعبه مراجعه کنید و فرم‌های مربوطه را پر کنید.',
        },
        {
            question: 'برای باز کردن حساب چه مدارکی لازم است؟',
            description: 'شما به مدارک شناسایی مانند کارت ملی و شناسنامه نیاز دارید.',
        },
        {
            question: 'مراحل باز کردن حساب چقدر زمان میبرد؟',
            description: 'شما به مدارک شناسایی مانند کارت ملی و شناسنامه نیاز دارید.',
        },
        {
            question: 'من کارت ملی هوشمند دریافت نکرده ام،آیا می توانم حساب باز کنم؟',
            description: 'شما به مدارک شناسایی مانند کارت ملی و شناسنامه نیاز دارید.',
        },
    ];

    return (
        <div className="max-w-5xl mb-10 mx-auto mt-10">
            <h1 className="text-4xl font-extrabold text-[#EE6621] sm:text-5xl lg:text-6xl my-10 mt-14">
                همراه بانک
            </h1>
            {questions.map((q, index) => (
                <Question key={index} question={q.question} description={q.description}/>
            ))}
        </div>
    );
};


export default RecentlyAskedQuestions;
