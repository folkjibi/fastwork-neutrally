import React from 'react'
import Cookies from '../components/policyComp/Cookies'
import Privates from '../components/policyComp/Privates'
import Requirs from '../components/policyComp/Requirs'

const Policy = () => {
    return (
        <div>
            <section className="text-gray-600">
                <Cookies />
            </section>
            
            <section className=" bg-gray-100">
                <Privates />
            </section>
            
            <section className="text-gray-600">
                <Requirs />
            </section>
        </div>
    )
}

export default Policy