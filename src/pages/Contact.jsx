import React from 'react'
import { Link } from 'react-router-dom'
import MapForm from '../components/contactComp/MapForm'
import Form from '../components/contactComp/Form'

const Contact = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 md:px-10 py-24 mx-auto flex flex-wrap sm:flex-nowrap">
                <div className="relative flex items-end justify-start bg-gray-300 rounded-lg overflow-hidden p-10 lg:w-2/3 md:w-1/2 sm:mr-10">
                    {/* Map Content */}
                    <MapForm />

                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="px-6 lg:w-1/2">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">เลขที่ 191 ม.5 ตำบลศรีสว่าง อำเภอนาโพธิ์ จังหวัดบุริรัมย์ 3120</p>
                        </div>
                        <div className="px-6 lg:w-1/2">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">EMAIL</h2>
                            <Link to="mailto:neutrallyguarantee@gmail.com" className="text-green-500 leading-relaxed">
                                neutrallyguarantee@gmail.com
                            </Link>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <Link to="tel:+661111111111">123-456-7890</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 md:w-1/2 bg-white flex flex-col mt-8 md:mt-0 md:ml-auto md:py-8">
                    {/* Form Contact */}
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contact