import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function DetailPage() {
    const { id } = useParams();
    const [model, setModel] = useState([])
    console.log(model);

    useEffect(() => {
        fetch("http://localhost:3100/services/"+ id)
            .then(res => res.json())
            .then(data => setModel(data))

    }, [])
    return (
        <div>
            <p>salam</p>
            {/* <li className={model.icon}></li> */}
            <p>{model.name}</p>
        </div>
    )
}

export default DetailPage