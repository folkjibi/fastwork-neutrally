import React from 'react'
import { Definition, Agreement, Apps, Users, Services, Content, Coin, Register } from '../../data/Requirs'

const Requirs = () => {

    return (
        <div className="container px-5 pt-4 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-lg font-medium leading-7 text-green-500">บัญชีกลาง</h2>
                <h1 className="my-2 text-lg sm:text-3xl font-medium tracking-tight text-gray-900">ข้อกำหนดและเงื่อนไขในการใช้งานแอพพลิเคชั่นบัญชีกลาง</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    ข้อกำหนดและเงื่อนไขในการใช้งานแอพพลิเคชั่นบัญชีกลางฉบับนี้ ("ข้อกำหนดและเงื่อนไขฯ") ได้ระบุถึงข้อกำหนดและเงื่อนไขในการใช้งานผลิตภัณฑ์และบริการใดๆ (เรียกรวมกันว่า "บริการฯ") ของบริษัท กลางหลักประกันออนไลน์ จำกัด ("บัญชีกลาง") แก้ผู้ใช้บริการ (โดยแต่ละรายเรียกว่า "ผู้ใช้" หรือ "ผู้ใช้รายต่างๆ" ขึ้นอยู่กับเนื้อหา)
                </p>
            </div>

            <div className="containerPrivates">
                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">1.คำนิยาม</h1>
                    <p className="mb-1">
                        คำแนะข้อความดังต่อไปนี้ให้มีความหมายตามที่ได้กำหนดไว้ด้านล่าง เมื่อมีการใช้ในข้อกำหนดและเงื่อนไขฯ ฉบับนี้
                    </p>
                    {Definition.map((desc, index) => {
                        return (
                            <ul key={index}>
                                <li>{desc.id} "{desc.name}" หมายถึง {desc.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">2.การตกลงยอมรับข้อกำหนดและเงื่อนไชฯ ฉบับนี้และการยอมรับข้อตกลงและเงื่อนไขการใช้งาน</h1>
                    <p className="mb-1">
                        ผู้ใช้งานจะต้องตกลงและปฏิบัติตามเงื่อนไข ซึ่งปรากฎอยู่บนเงื่อนไชการใช้หนี้ หรือในฉบับการแก้ไขเพิ่มเติมอันอาจจะมีขึ้นในภายหน้า และการที่ท่านได้ตกลงในการใช้งานแอพพลิเคชั่นนี้ บริษัทถือว่าท่านได้ยินยอมและเห็นด้วยกับข้อตกลงและเงื่อนไขการใช้งานฉบับนี้ หรือฉบับที่แก้ไขเพิ่มเติมแล้ว
                    </p>
                    {Agreement.map((agm, index) => {
                        return (
                            <ul className="mb-2" key={index}>
                                <li>{agm.id} {agm.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">3.การแก้ไขข้อกำหนดและเงื่อนไขฯฉบับนี้</h1>
                    <p className="mb-1">
                        แอพพลิเคชั่นบัญชีกลาง อาจเปลี่ยนแปลงแก้ไขข้อกำหนดและเงื่อนไขฯ ฉบับนี้ได้ตลอดเวลาตามที่แอพพลิเคชั่นบัญชีกลางเห็นสมควร ซึ่งจะอยู่ภายใต้ขอบวัตถุประสงค์ของข้อกำหนดและเงื่อนไขฯฉบับนี้ ในกรณีดังกล่าวแอพพลิเคชั่นบัญชีกลางจะแจ้งเนื้อหาของข้อกำหนดฉบับแก้ไขรวมถึงวันที่มีผลบังคับใช้บนเว็บไซต์ของแอพพลิเคชั่นบัญชีกลาง หรืออาจแจ้งให้ผู้ใช้ทราบด้วยวิธีการอื่นใดตามที่แอพพลิเคชั่นบัญชีกลางกำหนดทั้งนี้ ข้อกำหนดและเงื่อนไขฉบับแก้ไขจะมีผลบังคับใช้ตามเวลาที่กำหนด
                    </p>
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">4.บัญชีและการลงทะเบียนเพื่อใช้งานแอพพลิเคชั่น</h1>
                    <p className="mb-1">
                        ท่านต้องลงทะเบียนโดยกรอกรายละเอียดส่วนตัวตามที่กำหนดตามความเป็นจริงให้ถูกต้องครบถ้วน เพื่อเข้าใช้งานแอพพลิเคชั่นของบริษัทฯ เช่น ชื่อ-นามสกุล เพศ อีเมลล์ (ถ้ามี) เบอร์โทรศัพท์มือถือ ที่อยู่ตามบัตรประชาชน รหัสไปรษณีย์ และเลือกประเภทของเครื่องปรับอากาศที่ท่านให้บริการอยู่ กรณีที่เป็นร้านค้าต้องกรอก รายละเอียด เกี่ยวกับร้านค้าให้ถูกต้องครบถ้วน ภายหลังจากลงทะเบียนแล้วจะไม่สามารถแก้ไขเปลี่ยนแปลงได้
                    </p>
                    {Apps.map((app, index) => {
                        return (
                            <ul className="mb-2" key={index}>
                                <li>{app.id} {app.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">5.การคุ้มครองข้อส่วนบุคคล</h1>
                    {Users.map((user, index) => {
                        return (
                            <ul className="mb-2" key={index}>
                                <li>{user.id} {user.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">6.การให้บริการฯ</h1>
                    {Services.map((service, index) => {
                        return (
                            <ul className="mb-2" key={index}>
                                <li>{service.id} {service.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">7.โฆษณา</h1>
                    <p className="mb-2">แอพพลิเคชั่นบัญชีกลางขอสวงนสิทธิที่ในการโฆษณาของแอพพลิเคชั่นบัญชีกลาง หรือของบุคคลภายนอกบนระบบให้บริการฯ</p>
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">8.ผู้ให้บริการภายนอก</h1>
                    <p className="mb-2">
                        การให้บริการฯนี้อาจมีเนื้อหาฯ หรือบริการอื่นใดซึ่งให้บริการ หรือจัดทำโดยผู้ให้บริการภายนอก ในการนี้ผู้ให้บริการภายนอกดังกล่าวจะเป็นผู้รับผิดชอบแต่เพียงผู้เดียวเกี่ยวกับเนื้อหาฯ และ/หรือการให้บริการดังกล่าว นอกจากนี้เนื้อหาฯดังกล่าวอาจตกอยู่ภายใต้ข้อกำหนด การใช้ หรือข้อกำหนดและเงื่อนไขอื่นใด ซึ่งผู้ให้บริการภายนอกได้กำหนดไว้สำหรับเนื้อหาและบริการนั้นๆ
                    </p>
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">9.เนื้อหา</h1>
                    {Content.map((con, index) => {
                        return (
                            <ul className="mb-2" key={index}>
                                <li>{con.id} {con.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">10.เหรียญ</h1>
                    {Coin.map((coin, index) => {
                        return (
                            <ul className="mb-1" key={index}>
                                <li>{coin.id} {coin.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">11.บริการสมัครสมาชิก</h1>
                    {Register.map((reg, index) => {
                        return (
                            <ul className="mb-1" key={index}>
                                <li>{reg.id} {reg.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">12.ข้อจำกัดการใช้งาน</h1>
                    <p className="mb-2">ผู้ใช้ไม่สามารถกระทำการดังต่อไปนี้ เมื่อใช้บริการฯได้ตามที่แอพพลิเคชั่นบัญชีกลางกำหนด</p>
                </div>
            </div>
        </div>
    )
}

export default Requirs