import React from 'react'
import { Definition, Agreement } from '../../data/Requirs'

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
            </div>
        </div>
    )
}

export default Requirs