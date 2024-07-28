import React from 'react'
import { MdAccountBalance } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Content = () => {
    return (
        <div className="container px-5 pb-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/2 md:w-full">
                    <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                        <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                            <MdAccountBalance className="w-8 h-8" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">บัญชีกลาง</h2>
                            <p className="leading-relaxed text-base">
                                ตัวกลางรับชำระเงินและเก็บรักษาไว้จนกว่า ผู้ซื้อหรือผู้ว่าจ้างกับผู้ขาย หรือผู้รับจ้างจะยินยอมให้มีการจ่ายเงินเข้าบัญชี
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 lg:w-1/2 md:w-full">
                    <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                        <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                            <AiOutlineSafetyCertificate className="w-8 h-8" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">หลักประกันออนไลน์</h2>
                            <p className="leading-relaxed text-base">
                                เงินที่ผู้ขายใช้เป็นสิ่งค้ำประกันว่าสินค้า และ บริการที่ส่งมอบให้ผู้ซื้อจะสมบูรณ์ ไม่มีปัญหาในระยะเวลาที่รับประกัน
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content