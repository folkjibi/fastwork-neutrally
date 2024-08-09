import React from 'react'

// images
import HeroImg from '../../assets/images/hero.svg'

const Hero = () => {
    return (
        <div className="container mx-auto flex md:px-10 py-24 flex-col md:flex-row items-center">
            <div className="flex flex-col lg:flex-grow mb-16 items-center md:items-start text-center md:text-left md:w-1/2 px-2 lg:pr-24 md:pr-10">
                <h1 className="title-font text-3xl sm:text-4xl mb-4 font-medium text-gray-900">
                    จัดการบัญชีกลางของคุณได้ง่ายๆ ทุกที่ทุกเวลา
                    <br className="hidden lg:inline-block" /> ผ่านแอป บัญชีกลาง บน Play Store
                </h1>
                <p className="mb-8 leading-relaxed">
                    เป็นผู้ให้บริการบัญชีกลาง และหลักประกันออนไลน์ ตัวกลางรับชำระเงินระหว่างผู้ซื้อกับผู้ขาย ป้องกันมิจฉาชีพหลอกโอนเงินแล้วไม่ส่งของ และผู้ซื้อหลอกส่งของแล้วไม่โอนเงิน.
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="btn-secondary">
                        ดาวน์โหลดเลย
                    </button>
                    <button className="btn-primary hover:bg-black/80 hover:text-white">
                        สอบถามเพิ่มเติม
                    </button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src={HeroImg} />
            </div>
        </div>
    )
}

export default Hero