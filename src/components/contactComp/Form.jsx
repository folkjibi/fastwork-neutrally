import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const isValidForm = name && email && message;

        if (!isValidForm) {
            Swal.fire({
                title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                text: 'กรุณากรอกข้อมูลทุกช่อง',
                icon: 'warning',
                confirmButtonColor: '#dc3545'
            });
            return
        }

        const data = {
            name,
            email,
            message,
        }

        try {
            const response = await fetch('https://formspree.io/f/mzzpeano', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                Swal.fire({
                    title: "ส่งข้อมูลสำเร็จ",
                    text: "ขอบคุณสำหรับข้อเสนอแนะของคุณ!",
                    icon: "success",
                    confirmButtonColor: "#28a745"
                }).then(() => {
                    setName('');
                    setEmail('');
                    setMessage('');
                });
            } else {
                Swal.fire({
                    title: "เกิดข้อผิดพลาด",
                    text: "กรุณาลองอีกครั้ง",
                    icon: "error",
                    confirmButtonColor: "#dc3545",
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'เกิดข้อผิดพลาด!',
                text: 'กรุณาติดต่อผู้ดูแลระบบ',
                icon: 'error',
                confirmButtonColor: '#dc3545'
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">ข้อเสนอแนะ</h2>
            <p className="leading-relaxed mb-5 text-gray-600">เสนอไอเดียต่างๆ หรือระบบที่ต้องการเข้ามาได้เลย!</p>
            <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">ชื่อ - นามสกุล</label>
                <input
                    type="text"
                    id="full-name"
                    name="name"
                    className="inputForm"
                    placeholder="ชื่อนามสกุลของคุณ"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email-address" className="leading-7 text-sm text-gray-600">อีเมลล์</label>
                <input
                    type="email"
                    id="email-address"
                    name="_replyto"
                    className="inputForm"
                    placeholder="อีเมลของคุณ"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">ข้อความ</label>
                <textarea
                    id="message"
                    name="_subject"
                    className="textareaForm"
                    placeholder="ข้อความของคุณ"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                ></textarea>
            </div>
            <button type="submit" value="Submit" className="btn-secondary">ส่งข้อมูล</button>
            <p className="text-xs text-gray-500 mt-3">การเสนอแนะต่างๆของคุณจะถูกนำไปพัฒนาต่อในวันข้างหนัา</p>
        </form>
    )
}

export default Form