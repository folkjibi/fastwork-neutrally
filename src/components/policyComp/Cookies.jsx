import React from 'react'
import { HiBadgeCheck } from "react-icons/hi";
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
                                    <div className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                            <HiBadgeCheck className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" />
                                            <span className="title-font font-medium">
                                                อินเตอร์เน็ต โดเมนและ IP Address จากจุดที่ท่านเข้าสู่เว็บไซต์
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                            <HiBadgeCheck className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" />
                                            <span className="title-font font-medium">
                                                ประเภทของบราว์เซอร์ซอฟแวร์ ตลอดจนโครงสร้างและระบบการปฎิบัติงานที่ใช้ในการเข้าสู่เว็บไซต์
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                            <HiBadgeCheck className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" />
                                            <span className="title-font font-medium">วันที่และเวลาที่ท่านเข้าสู่เว็บไซต์</span>
                                        </div>
                                    </div>
                                    <div className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                            <HiBadgeCheck className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" />
                                            <span className="title-font font-medium">ที่อยู่ของเว็บไซต์อื่นที่เชื่อมโยงท่านเข้าสู่เว็บไซต์ของเรา</span>
                                        </div>
                                    </div>
                                    <div className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                            <HiBadgeCheck className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" />
                                            <span className="title-font font-medium">หน้าเว็บที่เข้าเยี่ยมชม และนำท่านออกจากเว็บไซต์ของเรา</span>
                                        </div>
                                    </div>
                                    <div className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                            <HiBadgeCheck className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" />
                                            <span className="title-font font-medium">เนืัอหาบนหน้าเว็บที่ท่านเยี่ยมชมและระยะเวลาที่ท่านใช้ในการเยี่ยมชม</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container px-4 py-8 mx-auto">
                                <p class="text-base font-medium mb-4">ประเภทของคุกกี้ที่เราใช้และในการใช้คุกกี้ดังกล่าว ประกอบด้วย แต่ไม่จำกัดเพียงรายการต่อไปนี้</p>

                                <div className="list-item mb-4">
                                    <span>คุกกี้ประเภทที่มีความจำเป็นอย่างยิ่ง (Strictly Necessary Cookies)</span>
                                    <p>
                                        คุกกี้ประเภทนี้มีความสำคัญต่อการทำงานของเว็บไซต์ ซึ่งรวมถึงคุกกี้ที่ทำให้ท่านสามารถเข้าถึงข้อมูลและใช้งานในเว็บไซต์ของเราได้อย่างปลอดภัย
                                    </p>
                                </div>
                                <div className="list-item mb-4">
                                    <span>คุกกี้เพื่อการวิเคราะห์/วัดผลการทำงานของเว็บไซต์ (Analytical/Performance Cookies)</span>
                                    <p>
                                        คุกกี้ประเภทนี้มีความสำคัญต่อการทำงานของเว็บไซต์ ซึ่งรวมถึงคุกกี้ที่ทำให้ท่านสามารถเข้าถึงข้อมูลและใช้งานในเว็บไซต์ของเราได้อย่างปลอดภัย
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cookies