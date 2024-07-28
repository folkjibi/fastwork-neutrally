import React from 'react'
import Content from '../components/aboutComp/Content'

const About = () => {
    return (
        <div>
            <div className="container text-gray-600 body-font pt-20">
                <div className="container pt-6 px-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10 sm:mb-20">
                        <h2 className="text-lg text-green-500 tracking-widest font-medium title-font mb-1">เกี่ยวกับเรา</h2>
                        <h1 className="text-lg sm:text-3xl font-medium mb-4 text-gray-900">บริษัท กลางหลักประกันออนไลน์ จำกัด</h1>
                        <p className="text-base mx-auto leading-relaxed lg:w-2/3">
                            เป็นผู้ให้บริการบัญชีกลาง และหลักประกันออนไลน์ ตัวกลางรับชำระเงินระหว่างผู้ซื้อกับผู้ขาย ป้องกันมิจฉาชีพหลอกโอนเงินแล้วไม่ส่งของ
                            และผู้ซื้อหลอกส่งของแล้วไม่โอนเงิน ก่อตั้งขึ้นโดนมีความตั้งใจที่จะเข้ามาแก้ไขปัญหาการหลอกลวงขายสินค้าและบริการในโลกออนไลน์ และ
                            ส่งเสิรมให้ธุรกิจในโลกออนไลน์ที่ขายจริง ส่งจริง มีโอกาศในการขายสินค้าและบริการ สนับสนุนให้ผู้ประกอบการเจริญเติบโตอย่างไร้ขีดจำกัด
                        </p>

                        <h1 className="text-lg sm:text-3xl font-medium mb-4 text-gray-900 pt-10">บริษัท กลางหลักประกันออนไลน์ จำกัด</h1>
                        <p className="text-base mx-auto leading-relaxed lg:w2/3">
                            ดำเนินธุรกิจภายใต้แนวคิดที่ต้องการให้การซื้อ-ขายสินค้าออนไลน์ทุกรายการปลอดภัยจากการถูกโกงทั้งจากผู้ซื้อ และผู้ขาย "บัญชีกลาง"
                            จึงออกแบบระบบให้เหมาะสมกับการใช้งานในทุกธุรกิจไม่ว่าจะเป็นธุรกิจออนไลน์ ธุรกิจขนาดย่อม ธุรกิจขนาดกลาง หรือธุรกิจขนาดใหญ่
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-gray-600 body-font">
                <Content />
            </div>
        </div>
    )
}

export default About