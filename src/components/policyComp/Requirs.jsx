import React from 'react'
import { Definition, Agreement, Apps, Users, Services, Content, Coin, Register, Limit, Responsibility, LimitApps, Contact, LimitUses, Usage, LastContent } from '../../data/Requirs'

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
                            <ul className="mb-2" key={index}>
                                <li>{reg.id} {reg.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">12.ข้อจำกัดการใช้งาน</h1>
                    <p className="mb-1">ผู้ใช้ไม่สามารถกระทำการดังต่อไปนี้ เมื่อใช้บริการฯได้ตามที่แอพพลิเคชั่นบัญชีกลางกำหนด</p>
                    {Limit.map((limits, index) => {
                        return (
                            <ul className="mb-2" key={index}>
                                <li>{limits.id} {limits.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">13.ความรับผิดชอบของผู้ใช้</h1>
                    {Responsibility.map((res, index) => {
                        return (
                            <ul className="mb-2" key={index}>
                                <li>{res.id} {res.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">14.การรับประกันความเสียหาย</h1>
                    <p>
                        แอปพลิเคชัน บัญชีกลางจะไม่รับประกันใด ๆ ไม่ว่าโดยชัดแจ้งหรือโดยปริยายเกี่ยวกับการให้บริการฯ แก่ผู้ใช้ (ซึ่งรวมถึงเนื้อหาหลักฯ) ว่าบริการฯ นั้นปราศจากข้อบกพร่องใดๆ (ข้อบกพร่องในที่นี่รวมถึงแต่ไม่จำกัดเพียง ข้อบกพร่องด้านความปลอดภัย ฯลฯ ข้อผิดพลาด บัค (BUGS) หรือการละเมิดสิทธิใดๆ) หรือมีความปลอดภัย มีความน่าเชื่อถือ มีความถูกต้องสมบูรณ์ มีประสิทธิภาพ และมีความเหมาะสมแก่การใช้ประโยชน์เฉพาะอย่าง ทั้งนี้ แอปพลิเคชัน บัญชีกลาง ไม่มีความรับผิดชอบในการที่จะต้องจัดหาบริการฯ ที่ไม่มีข้อบกพร่องดังกล่าวแต่อย่างใด
                    </p>
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">15.ข้อจำกัดความรับผิดของแอปพลิเคชันบัญชีกลาง</h1>
                    {LimitApps.map((limitApp, index) => {
                        return (
                            <ul className="mb-2" key={index}>
                                <li>{limitApp.id} {limitApp.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">16.ความสัมพันธ์ระหว่างกฎหมาย กฎระเบียบ และข้อกำหนดและเงื่อนไขฯฉบับนี้</h1>
                    <p>
                        ในกรณีที่ข้อกำหนดข้อหนึ่งข้อใดของข้อกำหนดและเงื่อนไขฯ ฉบับนี้ละเมิดกฎหมายหรือกฎระเบียบใดๆ ซึ่งมีผลใช้บังคับแก่ข้อตกลงระหว่างผู้ใช้และ แอปพลิเคชัน บัญชีกลาง เกี่ยวกับการให้บริการ (ซึ่งรวมถึงแต่ไม่จำกัดเพียงพระราชบัญญัติสัญญาผู้บริโภคของประเทศญี่ปุ่น) ข้อบังคับดังกล่าวไม่มีผลใช้บังคับแก่ผู้ใช้ อย่างไรก็ตาม ข้อบังคับอื่นนอกจากข้อบังคับดังกล่าวยังมีผลใช้บังคับ
                    </p>
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">17.การแจ้งเตือนและการติดต่อ</h1>
                    {Contact.map((contact, index) => {
                        return (
                            <ul className="mb-2" key={index}>
                                <li>{contact.id} {contact.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">18.กฎหมายที่ใช้บังคับและเขตอำนาจศาล</h1>
                    <p>
                        ในกรณีที่แอปพลิเคชันบัญชีกลางได้จัดหาคำแปลฉบับภาษาญี่ปุ่นของข้อกำหนดและเงื่อนไขฯฉบับนี้ให้แก่ผู้ใช้ ("ฉบับภาษาญี่ปุ่น") ให้ฉบับภาษาญี่ปุ่นมีผลใช้บังคับในเรื่องความสัมพันธ์ระหว่างผู้ใช้ และแอปพลิเคชันบัญชีกลาง ในกรณีที่มีการขัดกันระหว่างฉบับภาษาญี่ปุ่นและฉบับแปลอื่นเกิดขึ้นไม่ว่าในกรณีใด บทบัญญัติในฉบับภาษาญี่ปุ่นจะมีผลบังคับเหนือฉบับแปลอื่นใดทั้งสิ้น ทั้งนี้ ข้อกำหนดและเงื่อนไขฯ ฉบับนี้จะอยู่ภายใต้บังคับของกฎหมายญี่ปุ่น ความขัดแย้งที่เกิดขึ้นจากหรือมีความเกี่ยวพันกับการบริการฯ หรือความขัดแย้งระหว่างผู้ใช้และแอปพลิเคชัน บัญชีกลางที่เกี่ยวกับบริการฯ จะถูกตัดสินและอยู่ภายใต้เขตอำนาจศาลกรุงโตเกียว
                    </p>
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold mb-2">19.ข้อจำกัดในการใช้งาน</h1>
                    <p>
                        แอปพลิเคชั่นบัญชีผู้ใช้งานและรหัสผ่านทั้งหมด รวมไปถึงข้อมูลต่างๆที่อยู่ในแอปพลิเคชั่นถือเป็นทรัพย์สินของบริษัทฯ ไม่ว่าข้อมูลดังกล่าวจะได้มาด้วยวิธีการใดก็ตาม โดยบริษัทเพียงแต่ให้สิทธิแก่ผู้ใช้งานในการใช้บัญชี ชื่อผู้ใช้งาน รหัสผ่าน ภายในระยะเวลาที่กำหนดเท่านั้น และบริษัทฯขอสงวนสิทธิ์ในการเปลี่ยนแปลง เรียกคืน ระงับ หรือยกเลิกบัญชีชื่อผู้ใช้งาน รหัสผ่าน รวมถึงแอปพลิเคชั่นได้ทุกเมื่อ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า และบริษัทฯไม่ต้องรับผิดต่อความเสียหายที่เกิดขึ้นต่อผู้ใช้งาน
                    </p>
                    {LimitUses.map((liU, index) => {
                        return (
                            <div className="container">
                                <ul className="list-disc mb-2" key={index}>
                                    <li>{liU.description}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>

                <div className="mb-10">
                    <h1 className="text-2xl font-bold mb-2">20.สิทธิในทรัพย์สินทางปัญญา</h1>
                    <p>
                        บริษัทฯเป็นเจ้าของผู้มีกรรมสิทธิ์ในทรัพย์สินทางปัญญาบนแอปพลิเคชั่นนี้แต่เพียงผู้เดียว ห้ามมิให้ผู้ใด คัดลอก ทำซ้ำ โอน เปลี่ยนแปลง แก้ไข ดัดแปลงส่วนหนึ่งส่วนใด เผยแพร่ ในรูปแบบอื่นๆ ไม่ว่าทั้งหมดหรือแต่บางส่วนโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรจากทางบริษัทฯโดยเด็ดขาด ผู้ละเมิดจะถูกดำเนินคดีตามกฎหมายอย่างถึงที่สุด
                    </p>
                </div>

                <div className="mb-5">
                    <p>จบ</p>
                    <p>ปรับปรุงล่าสุดเมื่อวันที่ 12 กรกฎาคม 2567</p>
                </div>

                <hr className="w-1/2 border-red-500 border-t-4 mb-5" />

                <div className="mt-10 mb-3">
                    <h1 className="text-2xl font-bold underline mb-2">ข้อตกลงและเงื่อนไขในการใช้แอปพลิเคชั่น</h1>
                    <p>
                        เพื่อปกป้องสิทธิและประโยชน์ของท่านเกี่ยวกับการใช้แอพพลิเคชั่นนี้ โปรดอ่านเงื่อนไขการใช้งานทั้งหมดและตกลงที่จะปฏิบัติตามข้อตกลงและเงื่อนไขทั้งหมดดังต่อไปนี้
                    </p>
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold underline mb-2">ขอบเขตของข้อตกลงและเงื่อนไขการใช้งาน</h1>
                    <p>ข้อตกลงและเงื่อนไขการลงทะเบียนใช้งานแอปพลิเคชั่นนี้ ทำขึ้นระหว่างบริษัท คิวอาร์การันตี ประเทศไทย จำกัด ซึ่งต่อไปนี้จะเรียกว่า “บริษัทฯ” ซึ่งเป็นผู้ผลิตแอปพลิเคชั่น เพื่อกำหนดข้อตกลงและเงื่อนไขการใช้แอปพลิเคชั่นกับท่าน ซึ่งต่อไปนี้จะเรียกว่า “ผู้ใช้งาน”</p>
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold underline mb-2">การใช้งาน</h1>
                    <p className="mb-2">การใช้งานให้หมายความรวมถึงการใช้งานดังต่อไปนี้ด้วย</p>
                    {Usage.map((us, index) => {
                        return (
                            <ul className="mb-2" key={index}>
                                <li>{us.id} {us.description}</li>
                            </ul>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <h1 className="text-2xl font-bold underline mb-2">บัญชีและรหัสผ่านเข้าใช้งาน</h1>
                    <p className="font-medium mb-2">บริษัทจะให้ท่าน ตั้งชื่อบัญชีผู้ใช้งานและรหัสผ่านดังนี้</p>
                    <p className="font-bold">กรณีการตั้งบัญชีใช้งานโดยใช้อีเมล์</p>
                    <ul className="mb-2">
                        <li className="mb-2">
                            <span className="underline">1.ชื่อบัญชีผู้ใช้งาน</span>{" "}
                            <span>
                                ผู้ใช้สามารถกำหนดได้อิสระตั้งแต่ 4 หลักขึ้นไป โดยสามารถใช้ตัวอักษรภาษาอังกฤษ เป็นตัวพิมพ์ใหญ่-เล็ก, ภาษาไทย หรือตัวเลขผสมกันก็ได้ โดยไม่สามารถใส่ช้อมูลที่เป็นช่องว่างได้ หรือเลือกอย่างใดอย่างหนึ่งก็ได้ หากกรณีชื่อที่ท่านตั้ง มีการซ้ำกับชื่อผู้ใช้งานที่มีอยู่แล้ว ระบบจะแจ้ง ให้ท่านทราบเพื่อตั้งใหม่
                            </span>
                        </li>
                        <li>
                            <span className="underline">2.รหัสผ่านเข้าใช้งาน</span>{" "}
                            <span>
                                รหัสผ่านเข้าใช้งาน ผู้ใช้สามารถกำหนดได้อิสระไม่น้อยกว่า 4 หลัก ใช้ตัวอักษรภาษาอังกฤษพิมพ์ใหญ่ - เล็กและตัวเลขผสมอยู่ด้วยอย่างน้อย 1 หลัก โดยไม่เว้นช่องว่างและไม่สามารถใช้อักษรไทย
                            </span>
                        </li>
                    </ul>
                    <div>
                        <p>
                            ดังนั้นเพื่อความสะดวกและปลอดภัยของบัญชีผู้ใช้งาน ท่านควรตั้งรหัสผ่านที่ท่านเท่านั้นที่รู้ และตั้งรหัสผ่านให้คาดเดาได้ยาก และควรจดบันทึกไว้ในที่ที่ปลอดภัย
                        </p>
                        <p>
                            หลังจากการใส่ข้อมูลเพื่อลงทะเบียนแล้วเสร็จ ท่านต้องอ่าน <b>“ข้อตกลงและเงื่อนไขในการใช้แอปพลิเคชั่น”</b> และกดยอมรับเพื่อการสร้างและอัพเดทบัญชีของท่านจะได้เสร็จสมบูรณ์
                        </p>
                    </div>
                </div>

                <div className="mb-10">
                    <h1 className="text-2xl font-bold underline mb-2">รหัสผ่านเข้าใช้งาน</h1>
                    <p className="mb-2">
                        ทั้งผู้ที่เคยมีบัญชีที่อยู่แล้ว และผู้ที่สร้างบัญชีใหม่ ที่เข้าสู่บัญชีโดยการอ้างอิงไลน์หรือเฟสบุ๊คของท่าน จะได้รับรหัสใช้ครั้งเดียว (one-time pin) เพื่อเข้าสู่บัญชีของท่านในครั้งแรก การเข้าสู่บัญชีครั้งต่อๆไปไม่จำเป็นต้องใช้พาสเวิร์ดหรือรหัสใช้ครั้งเดียวอีก เพราะบัญชีของท่านบนแอพพลิเคชั่นนี้ได้ถูกเชื่อมต่อกับบัญชีไลน์หรือเฟสบุ๊คไว้แล้ว ดังนั้นท่านจำเป็นต้องรักษาโทรศัพท์มือถือของท่านไม่ให้ผู้อื่นนำไปใช้งานเพื่อความปลอดภัยในการใช้งานแอพพลิเคชั่นนี้สำหรับตัวท่านเอง
                    </p>
                    {LastContent.map((last, index) => {
                        return (
                            <div className="container">
                                <ul className="list-disc mb-2" key={index}>
                                    <li>{last.description}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>

                <span className="text-red-500">*** บัญชีกลางเป็นเพียงผู้ให้บริการความปลอดภัยในการซื้อขายสินค้าในโลกออนไลน์ ผู้ใช้บริการควรตกลงราคา ค่าใช้จ่าย ค่าธรรมเนียม หรือค่าบริการต่างๆในการใช้บริารบัญชีกลาง ***</span>
            </div>
        </div>
    )
}

export default Requirs