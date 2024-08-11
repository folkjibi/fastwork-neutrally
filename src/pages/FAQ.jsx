import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { faqDB } from '../data/Faqs';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    }

    return (
        <div>
            <div className="container mx-auto p-6 max-w-3xl py-28">
                <h1 className="text-4xl font-bold mb-8 text-center">คำถามที่พบบ่อย</h1>
                {faqDB.map((item, index) => (
                    <div key={index} className="mb-6 border-b border-gray-200">
                        <button
                            className="w-full text-left text-xl font-semibold text-green-600 focus:outline-none"
                            onClick={() => toggleAnswer(index)}
                        >
                            <div className="flex justify-between items-center py-4">
                                <span>{item.question}</span>
                                <IoIosArrowDown className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                            </div>
                        </button>
                        {openIndex === index && (
                            <div className="py-4">
                                <p className="text-gray-700">{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ