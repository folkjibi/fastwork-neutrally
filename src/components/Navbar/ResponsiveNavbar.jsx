import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveNavbar = ({ showMenu, handleLinkClick }) => {
    return (
        <div className={`${showMenu ? "left-0" : "-left-[100%]"} h-screen w-[75%] bg-white fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8 flex justify-between border-e border-secondary`}>
            <div>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <Link to="/home" onClick={handleLinkClick}>
                                หน้าแรก
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={handleLinkClick}>
                                เกี่ยวกับเรา
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq" onClick={handleLinkClick}>
                                คำถามที่พบบ่อย
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={handleLinkClick}>
                                ติดต่อ
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ResponsiveNavbar