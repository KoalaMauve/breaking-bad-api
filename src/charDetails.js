import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllCharacter, getApiResponse } from './home';
import Loader from './loader';
import './charDetails.css'

function CharDetails(props) {
    let { id } = useParams();

    const [data, setData] = useState(undefined)
    const [death, setDeath] = useState(undefined)

    useEffect(async () => {
        const res = await getAllCharacter(id)
        setData(res[0])
        const _death = await getApiResponse('death-count?name=' + res[0].name.replace(" ", "+"))
        console.log(_death[0])
        setDeath(_death[0])
    }, [])

    if (!data || !death) {
        return false
    }

    return (
        <div className='detail-container'>
            <div className='content-container'><img src={data.img} className='detail-img'></img></div>
            <div className='content-container'><p>Status :</p><div>{data.status}</div></div>
            <div className='content-container'><p>Nom :</p><div>{data.name}</div></div>
            <div className='content-container'><p>Surnom :</p><div>{data.nickname}</div></div>
            <div className='content-container'><p>Deaths :</p><div>{death.deathCount}</div></div>
            {data.occupation.map((occupation) => {
                return (
                    <div className='content-container'><p>Occupation :</p><div>{occupation}</div></div>
                )
            })}
        </div >
    )
}

export default CharDetails;