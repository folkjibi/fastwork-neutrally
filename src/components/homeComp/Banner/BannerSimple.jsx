import React from 'react'

const BannerSimple = () => {
    return (
        <div className="container py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-8 sm:text-ellipsis">
                <div className="px-2">
                    <iframe
                        className="aspect-video w-full"
                        src="https://www.youtube.com/embed/7QctwbS0CBM?si=fVNCvijzoGcBeGc3"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen=""
                    >
                    </iframe>
                </div>
                <div className="flex flex-col items-center md:items-start gap-4 text-white text-center md:text-left md:col-span-2 px-2">
                    <h1 className="text-3xl font-bold">
                        แอพพลิเคชั่นบัญชีกลาง
                    </h1>
                    <p>
                        ให้บริการโดย บริษัท กลางหลักประกันออนไลน์ จำกัดแอพพลิเคชั่นที่จะมาเป็นตัวกลาง ดูแลการชำระเงินระหว่างผู้ซื้อ และผู้ขาย
                        สินค้าและบริการในโลกออนไลน์ทุกโซเซียลมิเดีย
                    </p>
                    <button className="btn-primary">อ่านเพิ่มเติม</button>
                </div>
            </div>
        </div>
    )
}

export default BannerSimple