import React from 'react'
import { Link } from 'react-router-dom'
import BannerImg from '../../../assets/images/banner.jpg'

const banner = () => {
    return (
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="w-5/6 md:w-1/2 lg:max-w-lg lg:w-full mb-10 md:mb-0">
                <img className="object-cover object-center rounded" alt="hero" src={BannerImg} />
            </div>
            <div className="flex flex-col lg:flex-grow items-center text-center md:text-left md:w-1/2 lg:pl-24 md:pl-16 md:items-start">
                <h1 className="title-font text-3xl sm:text-4xl mb-4 font-medium text-gray-900">
                    บัญชีกลาง คืออะไร?
                </h1>
                <p className="mb-4 leading-relaxed">
                    ตัวกลางรับชำระเงินและเก็บรักษาไว้จนกว่า ผู้ซื้อหรือผู้ว่าจ้าง กับผู้ขายหรือผู้รับจ้างจะยินยอมให้มีการจ่ายเงินเข้าบัญชี เพื่อทำการซื้อขายให้สมบูรณ์ ป้องกันมิจฉาชีพหลอกโอนเงินแล้วไม่ส่งของ และการหลอกลวงให้ส่งมอบสินค้าและบริการ แล้วไม่ชำระเงิน ซึ่งก่อให้เกิดความเสียหายต่อผู้ขาย
                </p>
                <ul className="list-disc list-inside mb-8 text-start">
                    <li>ลดปัญหามิจฉาชีพ</li>
                    <li>ใช้งานง่าย สะดวก ไม่ถูกจำกัดช่องทางการซื้อขาย</li>
                    <li>บัญชีกลาง ที่ผ่านแอพพลิเคชั่น และดำเนินธุรกิจในรูปแบบบริษัท จดทะเบียนถูกต้องตามกฎหมายรายแรกของไทย</li>
                    <li>ค่าบริการมีมาตรฐานและราคาต่ำ</li>
                </ul>
                <div className="flex justify-center">
                    <Link to="/about" className="btn-secondary">อ่านเพิ่มเติม</Link>
                </div>
            </div>
        </div>
    )
}

export default banner