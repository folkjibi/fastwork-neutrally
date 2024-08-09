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
                                    <p className="text-base leading-relaxed mx-auto">
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

                            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                                <div className="flex flex-wrap w-full">
                                    <div className="md:pr-10 md:py-6">
                                        <div className="flex relative pb-12">
                                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-4">
                                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                                                <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                            </div>
                                        </div>
                                        <div className="flex relative pb-12">
                                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-4">
                                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                                                <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                                            </div>
                                        </div>
                                        <div className="flex relative pb-12">
                                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <circle cx="12" cy="5" r="3"></circle>
                                                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-4">
                                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                                                <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
                                            </div>
                                        </div>
                                        <div className="flex relative pb-12">
                                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-4">
                                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                                                <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                            </div>
                                        </div>
                                        <div className="flex relative">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                    <path d="M22 4L12 14.01l-3-3"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-grow pl-4">
                                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                                                <p className="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
                                            </div>
                                        </div>
                                    </div>
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