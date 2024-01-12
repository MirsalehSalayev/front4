import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
function OurTeam() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3100/services")
            const api = await response.json()
            setData(api)
        }
        fetchData()

    }, [])

    return (

        <div>{data.map((item) => {
            return (
                <div key={item._id}>
                    <i class={item.icon}></i>
                    <div>{item.name}</div>
                    <div>{item.title}</div>

                    <NavLink to={/detail/ + item._id}>Detail</NavLink>
                </div>
            )
        })}</div >
    )
}

export default OurTeam