import React from 'react'

const Map = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30731.170954609286!2d102.91099332630435!3d15.677100223301121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31185c821831334f%3A0xdfd390dfe1035360!2z4Liq4LiH4LmB4LiU4LiHIOC4leC4s-C4muC4pSDguKjguKPguLXguKrguKfguYjguLLguIcg4Lit4Liz4LmA4Lig4LitIOC4meC4suC5guC4nuC4mOC4tOC5jCDguJrguLjguKPguLXguKPguLHguKHguKLguYwgMzEyMzA!5e0!3m2!1sth!2sth!4v1721591620316!5m2!1sth!2sth"
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}

export default Map