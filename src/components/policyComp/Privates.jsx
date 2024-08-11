import React from 'react'
import { Link } from 'react-router-dom'
import { category, chance, db, reveal, law } from '../../data/Privates'

const Privates = () => {
    return (
        <div className="container px-5 pt-4 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-lg font-medium leading-7 text-green-500">บัญชีกลาง</h2>
                <h1 className="my-2 text-lg sm:text-3xl font-medium tracking-tight text-gray-900">ประกาศการคุ้มครองข้อมูลส่วนบุคคล</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    บริษัท กลางหลักประกันออนไลน์ จำกัด และบัญชีกลาง ตระหนักถึงความสำคัญของข้อมูลส่วนตัวและข้อมูลอื่นเกี่ยวกับคุณ (รวมเรียกว่า "ข้อมูล") และมีความมุ่งมั่นที่จะรักษาความปลอดภัยของข้อมูลรวมทั้งความเป็นส่วนตัวของคุณอย่างดี เพื่อให้คุณสามารถเชื่อมั่นได้ว่าบัญชีกลาง มีความโปร่งใสและความรับผิดชอบในการเก็บรวบรวมใช้ เปิดเผย หรือโอนข้อมูลของคุณตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 และกฎหมายอื่นๆที่เกี่ยวข้อง บัญชีกลางจึงได้จัดประกาศการคุ้มครองส่วนบุคคล เพื่อชี้แจ้งให้คุณได้ทราบถึงรายละเอียดที่เกี่ยวกับการรวบรวมใช้เปิดเผยข้อมูลของคุณ หรือการโอนข้อมูลดังกล่าวของบัญชีกลาง ซึ่งมีใจความสำคัญโดยสังเขปดังนี้
                </p>
            </div>

            <div className="containerPrivates">
                <h1 className="text-3xl font-bold mb-4">ข้อมูลส่วนบุคคลคืออะไร?</h1>
                <p className="mb-4">
                    "ข้อมูลส่วนบุคคล" หมายถึง ข้อมูลเกี่ยวกับบุคคลที่สามารถระบุตัวบุคคลนั้นได้ไม่ทางตรงหรือทางอ้อม เช่น ชื่อ-นามสกุล หมายเลขบัตรประจำตัวประชาชน วันเดือนปีเกิด ที่อยู่ หรือข้อมมูลส่วนบุคคลที่มีความระเอียดอ่อน เช่น ข้อมูลภาพจำลองใบหน้า ข้อมูลจำลองลายนิ้วมือ ข้อมูลเกี่ยวกับศาสนา แต่ไม่ครอบคลุมถึงข้อมูลของผู้ที่เสียชีวิตแล้ว
                </p>
            </div>

            <div className="containerPrivates">
                <h2 className="text-2xl font-bold">บัญชีกลางเก็บข้อมูลของคุณประเภทใดบ้าง</h2>
                <p className="mb-2">
                    บัญชีกลาง เก็บรวบรวมข้อมูลของคุณเมื่อคุฯและบัญชีกลางได้มีการติดต่อกันไม่ว่าทางใดทางหนึ่ง เช่น เมื่อคุณสมัครของใช้ผลิตภัณฑ์ หรือบริการของบัญชีกลาง หรือคุณทำธุรกรรมทางการเงินกับบัญชีกลาง โดยข้อมูลของคุณที่บัญชีกลาง จะเก็บรวบรวมได้แก่
                </p>
                {category.map((menu, index) => {
                    return (
                        <ul className="list-disc list-inside mb-2" key={index}>
                            <li className="list-item">
                                {menu.description}
                            </li>
                        </ul>
                    )
                })}
            </div>

            <div className="containerPrivates">
                <h2 className="text-2xl font-bold">บัญชีกลางเก็บข้อมูลของคุณผ่านช่องทางใดบ้าง</h2>
                <p className="mb-2">บัญชีกลางเก็บรวบรวมข้อมูลของคุณผ่านช่องทางหลักๆ ดังนี้</p>
                {chance.map((menu, index) => {
                    return (
                        <ul className="list-disc list-inside mb-2" key={index}>
                            <li className="list-item">
                                {menu.description}
                            </li>
                        </ul>
                    )
                })}
            </div>

            <div className="containerPrivates">
                <h2 className="text-2xl font-bold">ทำไมบัญชีกลางต้องเก็บข้อมูลของคุณ</h2>
                <p className="mb-2">
                    บัญชีกลางเก็บรวบรวมข้อมูลของคุณเพื่อปฎิบัติตามสัญญา เพื่อประโยชน์โดยชอบด้วยกฎหมาย เพื่อปฎิบัติหน้าที่ตามกฎหมาย เพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพของคุณ เพื่อการก่อตั้งสิทธิ การใช้สิทธิ การยกข้อสิทธิเรียกร้อง หรือโดยอาศัยความยินยอม เพื่อวัตุประสงค์ต่างๆ เช่น
                </p>
                {db.map((menu, index) => {
                    return (
                        <ul className="list-disc list-inside mb-2" key={index}>
                            <li className="list-item">
                                {menu.description}
                            </li>
                        </ul>
                    )
                })}
            </div>

            <div className="containerPrivates">
                <h2 className="text-2xl font-bold">บัญชีกลางเก็บข้อมูลของคุณเป็นระยะเวลาเท่าใด</h2>
                <p className="mb-2">
                    บัญชีกลางเก็บข้อมูลของคุณตามระยะเวลาที่เกี่ยวข้อง เช่น ตลอดระยะเวลาที่คุณยังคงใช้ผลิตภัณฑ์บริการของบัญชีกลาง หรือตลอดระยะเวลาที่คุณยังมีความสัมพันธ์กับบัญชีกลาง หรือตามระยะเวลาที่กฎหมายกำหนด
                </p>
            </div>

            <div className="containerPrivates">
                <h2 className="text-2xl font-bold">บัญชีกลางเปิดเผยข้อมูลของคุณไปที่ใดบ้าง</h2>
                <p className="mb-2">บัญชีกลางอาจจะเปิดเผยข้อมูลของคุณให้กับบุคคลหน่วยงานดังต่อไปนี้</p>
                {reveal.map((menu, index) => {
                    return (
                        <ul className="list-disc list-inside mb-2" key={index}>
                            <li className="list-item">
                                {menu.description}
                            </li>
                        </ul>
                    )
                })}
            </div>

            <div className="containerPrivates">
                <h2 className="text-2xl font-bold">สิทธิตามกฎหมายของคุณมีอะไรบ้าง</h2>
                <p className="mb-2">ในฐานะเจ้าของข้อมูลส่วนบุคคล คุณมีสิทธิตามกฎหมายเกี่ยวกับการเก็บรวบรวมใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณดังนี้</p>
                {law.map((menu, index) => {
                    return (
                        <ul className="list-disc list-inside mb-2" key={index}>
                            <li className="list-item">
                                {menu.description}
                            </li>
                        </ul>
                    )
                })}
            </div>

            <div className="containerPrivates text-center mt-6">
                <h2 className="text-2xl font-bold">กรณีมีข้อสงสัยสามารถติดต่อบัญชีกลางผ่านช่องทางไหนได้บ้าง</h2>
                <p>กรณีมีข้อสงสัยเพิ่มเติมเกี่ยวกับประกาศการคุ้มครองข้อมูลส่วนบุคคล โปรดติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของบัญชีกลางได้ที่</p>
                <div className="text-start">
                    <Link to="mailto:neutrallyguarantee@gmail.com">อีเมลล์ : <span className="text-orange-400">neutrallyguarantee@gmail.com</span></Link>
                    <p>ที่อยู่ : บริษัท กลางหลักประกันออนไลน์ จำกัด สำนักงานใหญ่ เลขที่ 191 หมู่ 5 ตำบลศรีสว่าง อำเภอนาโพธิ์ จังหวัดบุริรัมย์ 31230</p>
                    <Link to="tel:+66821147724">โทรศัพท์ : <span className="text-orange-400">082-114-7724</span></Link>
                    <br />
                    <Link to="https://line.me/R/ti/p/@326oskfn?oat_content=url&ts=07281224" target="_blank">
                        Line official Account : @bhcg
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Privates