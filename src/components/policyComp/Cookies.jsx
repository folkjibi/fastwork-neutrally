import React from 'react'
import { HiBadgeCheck } from "react-icons/hi";
import { contentMenu, content_1 } from "../../data/Cookies"

const Cookies = () => {
    return (
        <div className="relative container mx-auto isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2 lg:items-start lg:gap-y-10 w-full">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:grid lg:w-full lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:w-full text-center">
                            <p className="text-lg font-medium leading-7 text-green-500">บัญชีกลาง</p>
                            <h1 className="my-2 text-lg sm:text-3xl font-medium tracking-tight text-gray-900">ประกาศการใช้งานคุกกี้</h1>
                            <p className="text-base mx-auto leading-relaxed lg:w-2/3 text-gray-700">
                                เว็บไซต์นี้ให้บริการโดยบริษัท กลางหลักประกันออนไลน์ จำกัด เว็บไซต์นี้ใช้คุกกี้และเครื่องมืออื่น เช่น Google Analytics เพื่อช่วยแยกแยะรูปแบบการใช้งานเว็บไซต์ของท่านจากผู้ใช้งานอื่นๆ ซึ่งจะช่วยให้ท่านได้รับประสบการณ์ที่ดีจากการใช้งานเว็บไซต์ และช่วยให้เราสามารถพัฒนาคุณภาพของเว็บไซต์ให้ดียิ่งขึ้น กรณีที่ท่านใช้งานเว็บไซต์นี้ต่อไป ถือว่าท่านได้ยินยอมให้เราติดตั้งคุกกี้ไว้ในเครื่องคอมพิวเตอร์ หรืออุปกรณ์อื่นใดที่เข้าถึงเว็บไซต์นี้ของท่าน
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:grid lg:w-full lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <h2 className="text-lg sm:text-3xl font-medium">คุกกี้คืออะไร?</h2>
                        <div className="w-full text-base text-gray-700">
                            <p className="mt-2">
                                คือ ข้อความขนาดเล็กที่ประกอบด้วยส่วนของข้อมูลที่มาจากการดาวน์โหลดที่อาจถูกเก็บบันทึกไว้ในเว็บเบราว์เซอร์ที่ท่านใช้งานหรืออุปกรณ์อื่น ๆ ที่ต่อเชื่อมอินเทอร์เน็ต (อาทิ เครื่องคอมพิวเตอร์ สมาร์ทโฟน หรือแท็บเล็ตของท่าน) โดยที่เครื่องเซิร์ฟเวอร์สามารถเรียกดูได้ในภายหลัง คล้ายกับหน่วยความจำของหน้าเว็บ
                            </p>

                            <div className="container mx-auto">
                                <div className="w-full mt-10 mb-2">
                                    <p className="text-base font-medium leading-relaxed mx-auto">
                                        การทำงานของคุกกี้ ช่วยให้เรารวบรวมและจัดเก็บข้อมูลการเยี่ยมชมเว็บไซต์ของท่านดังต่อไปนี้โดยอัตโนมัติ
                                    </p>
                                </div>
                                <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 -mx-2">
                                    {contentMenu.map((menu) => (
                                        <div className="p-2 sm:w-1/2 w-full" key={menu.id}>
                                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                                <HiBadgeCheck className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" />
                                                <span className="title-font font-medium">{menu.description}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="container px-4 py-8 mx-auto">
                                <p className="text-base font-medium mb-4">ประเภทของคุกกี้ที่เราใช้และในการใช้คุกกี้ดังกล่าว ประกอบด้วย แต่ไม่จำกัดเพียงรายการต่อไปนี้</p>
                                {content_1.map((content) => (
                                    <div className="list-item mb-4" key={content.id}>
                                        <span>{content.title}</span>
                                        <p>{content.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-center w-full">
                <p className="mx-auto leading-relaxed text-base">
                    โปรดทราบว่าคุกกี้บางประเภทในเว็บไซต์นี้จัดการโดยบุคคลที่สาม เช่น เครื่อข่ายการโฆษณา ลักษณะการทำงานต่างๆ อาทิ วิดีโอ แผนที่ และโซเซียลมีเดีย และผู้ให้ยริการเว็บไซต์ภายนอกอื่นๆ เช่น บริการวิเคราะห์/วัดผลการทำงาน หรือคุกกี้เพื่อปรับเนื้อหาเข้ากับกลุ่มเป้าหมาย ท่านควรต้องศึกษานโยบายการใช้คุกกี้และนโยบายส่วนบุคคลในเว็บไซต์ของบุคคลที่สาม เพื่อให้เข้าใจถึงวิธีการที่บุคคลที่สามอาจนำข้อมูลของท่านไปใช้
                </p>
            </div>

            <div className="text-center w-full mb-10">
                <h1 className="text-2xl font-medium title-font mt-10 text-gray-900 tracking-widest">การตั้งค่าคุกกี้</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    ท่านสามารถบล็อกการทำงานของคุกกี้ได้โดยการกำหนดค่าในบราว์เซอร์ของท่าน ซึ่งท่านอาจจะปฎิเสธติดตั้งคุกกี้ทั้งหมดหรือบางประเภทกฌได้ แต่พึงตระหนักว่าหากท่านตั้งค่าบราว์เซอร์ของท่านด้วยการบล็อคคุกกี้ทั้งหมด (รวมถึงคุกกี้ที่จำเป็นต่อการใช้งาน) ท่านอาจจะไม่สามารถเข้าสู่เว็บไซต์ทั้งหมดหรือบางส่วนของเราได้
                </p>
            </div>

            <div className="text-center w-full">
                <p className="mx-auto leading-relaxed text-base">
                    เมื่อใดก็ตามที่ท่านต้องการยกเลิกความยินยอมการใช้งานคุกกี้ ท่านจะต้องตั้งค่าบราว์เซอร์ของท่านเพื่อให้ลบคุกกี้ออกจากแต่ละบราว์เซอร์ที่ท่านใช้งาน
                </p>
            </div>
        </div>
    )
}

export default Cookies