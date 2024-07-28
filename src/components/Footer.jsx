import React from 'react'
import { Link } from 'react-router-dom'
import { FaLine, FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-secondary mt-2">
            <div className="container flex flex-col sm:flex-row items-center px-5 py-4 mx-auto">
                <Link to="/" className="flex font-medium items-center justify-center md:justify-start text-white">
                    {/* start logo section */}
                    <img src="" alt="" />
                    {/* end logo section */}
                    <span className="ml-3 text-xl">บัญชีกลาง</span>
                </Link>
                <p className="text-sm text-white mt-4 sm:mt-0 sm:ml-4 sm:py-2 sm:pl-4">
                    © 2024 บัญชีกลาง — <Link to="https://www.facebook.com/profile.php?id=100093686839625&mibextid=LQQJ4d" className="text-white ml-1" target="_blank">@Neutrally Guarantee</Link>
                </p>
                <span className="inline-flex mt-4 sm:mt-0 sm:ml-auto justify-center space-x-4 sm:justify-start">
                    <Link to="https://line.me/R/ti/p/@326oskfn?oat_content=url&ts=07281224" target="_blank" className="text-white">
                        <FaLine className="w-5 h-5" />
                    </Link>
                    <Link to="https://www.facebook.com/profile.php?id=100093686839625&mibextid=LQQJ4d" target="_blank" className="text-white">
                        <FaFacebookF className="w-5 h-5" />
                    </Link>
                    <Link to="https://www.tiktok.com/@neutrallyguarantee" target="_blank" className="text-white">
                        <FaTiktok className="w-5 h-5" />
                    </Link>
                    <Link to="https://www.youtube.com/@%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B5%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87" target="_blank" className="text-white">
                        <FaYoutube className="w-5 h-5" />
                    </Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer