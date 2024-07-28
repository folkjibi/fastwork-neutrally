import React from 'react'
import { Link } from 'react-router-dom'
import BannerImg from '../../../assets/images/banner.jpg'

const BannerSec = () => {
    return (
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="flex flex-col lg:flex-grow items-center text-center md:text-left md:w-1/2 lg:pr-24 md:pr-16 md:items-start">
                <h1 className="title-font text-3xl sm:text-4xl mb-4 font-medium text-gray-900">
                    หลักประกันออนไลน์ คืออะไร?
                </h1>
                <p className="mb-4 leading-relaxed">
                    เป็นหลักประกันที่ต้องกำหนดไว้ในสัญญา เพื่อใช้เป็นการประกันให้ ผู้ขายหรือผู้รับจ้างหรือคู่สัญญาปฎิบัติตามสัญญา หากไม่ปฎิบัติตามสัญญาหรือทำให้เกิดความเสียหาย คู่สัญญาฝ่ายผู้ว่าจ้างหรือผู้ซื้อก็สามารถบังคับหรือริบหลักประกันสัญญานี้ได้ ซึ่งโดยหลักประกันจะใช้เป็นหลักประกันตลอดอายุสัญญา ผู้ว่าจ้างหรือผู้ซื้อจะคืนหลักประกันสัญญาโดยไม่มีดอกเบี้ยให้แก้ผู้รับจ้างหรือผู้ขาย
                    เมื่อพ้นข้อผูกพันตามสัญญาแล้ว
                </p>
                <ul className="list-disc list-inside mb-8 text-start">
                    <li>ลดปัญหาความขัดแย้งหลังส่งมอบสินค้าและบริการ</li>
                    <li>เข้าถึงง่าย สะดวก ลดเวลาดำเนินการ</li>
                    <li>หลักประกันออนไลน์ ที่สามารถทำรายการผ่านแอพพลิเคชั่นมือถือรายแรกของไทย</li>
                    <li>ค่าบริการมีมาตรฐานและราคาต่ำ ไม่มีค่าปรับหากถอนหลักประกันล่าช้า</li>
                </ul>
                <div className="flex justify-center mb-10 md:mb-0">
                    <Link to="/about" className="btn-secondary">อ่านเพิ่มเติม</Link>
                </div>
            </div>
            <div className="w-5/6 md:w-1/2 lg:max-w-lg lg:w-full">
                <img className="object-cover object-center rounded" alt="hero" src={BannerImg} />
            </div>
        </div>
    )
}

export default BannerSec