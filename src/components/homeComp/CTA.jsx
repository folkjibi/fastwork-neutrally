import React from 'react'
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <div className="container px-5 py-12 mx-auto flex items-center md:flex-row flex-col">
            <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">ระบบรักษาความปลอดภัยขั้นสูง</h2>
                <h1 className="text-2xl md:text-3xl font-medium title-font text-green-900">ตรวจสอบธุรกรรมได้ทุกที่ทุกเวลา</h1>
            </div>
            <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                <button className="bg-green-100 inline-flex py-3 px-2 rounded-lg items-center hover:bg-green-200 focus:outline-none">
                    <BiLogoPlayStore className="w-8 h-8" />
                    <Link to="https://play.google.com/store/apps/details?id=com.app.neutrally_guarantee" target="_blank" className="ml-4 flex items-start flex-col leading-none">
                        <span className="text-xs text-green-600 mb-1">GET IT ON</span>
                        <span className="title-font font-medium">Google Play</span>
                    </Link>
                </button>
                <button className="bg-green-100 inline-flex py-3 px-2 rounded-lg items-center hover:bg-green-200 focus:outline-none">
                    <FaApple className="w-8 h-8" />
                    <Link to="https://apps.apple.com/app/บ-ญช-กลาง/id6741061564" target="_blank" className="ml-4 flex items-start flex-col leading-none">
                        <span className="text-xs text-green-600 mb-1">GET IT ON</span>
                        <span className="title-font font-medium">App Store</span>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default CTA