import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const faqData = [
    {
        question: "บัญชีกลางคืออะไร",
        answer: "ตัวกลางรับชำระเงินระหว่างผู้ซื้อกับผู้ขาย ป้องกันมิจฉาชีพหลอกโอนเงินแล้วไม่ส่งของ โดยบริษัทกลางหลักประกันออนไลน์จำกัด",
    },
    {
        question: "หลักประกันออนไลน์คืออะไร",
        answer: "เงินที่ผู้ขายใช้เป็นสิ่งค้ำประกันว่าสินค้า และ บริการที่ส่งมอบให้ผู้ซื้อจะสมบรูณ์ ไม่มีปัญหาในระยะเวลาที่รับประกัน",
    },
    {
        question: "บัญชีกลางเหมาะกับใคร",
        answer: "ผู้ซื้อที่ไม่อยากถูกโกง ผู้ซื้อที่ต้องการซื้อสินค้าจากผู้ขายที่ไม่มั่นใจว่าจะได้สินค้า ผู้ขายที่ลงขายสินค้าเองผ่านช่องทางต่างๆ ไม่ได้วางขายบนแฟลตฟอร์มออนไลน์ ผู้ขายที่ต้องการความน่าเชื่อถือว่าส่งของจริง ไม่โกงแน่นอน ผู้ขายที่ลูกค้าไม่กล้าซื้อเพราะกลัวถูกโกง ผู้ขายที่พร้อมจะเดินไปกับบัญขีกลาง สร้างโอกาา สร้างความน่าเชื่อถือ",
    },
    {
        question: "หลักประกันออนไลน์ที่เหมาะกับทุกคน และธุรกิจ",
        answer: "ค่าบริการ 15 บาท / รายการสำหรับบัญชีกลาง ค่าบริการหลักประกันออนไลน์ฉบับละ 300 บาท ไม่กำหนดระยะเวเลาถอน",
    },
];

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
                {faqData.map((item, index) => (
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