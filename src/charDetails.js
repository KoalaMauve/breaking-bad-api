import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllCharacter, getApiResponse } from './home';
import Loader from './loader';
import { useHistory } from 'react-router-dom';
import './charDetails.css'

function CharDetails(props) {
    let { id } = useParams();
    id = parseInt(id)

    let history = useHistory();
    function handlePrevHistory() {
        if (id == 1) {
            id = 58
        }
        history.push("/characters/" + (id - 1))
    }
    function handleNextHistory() {
        if (id == 57) {
            id = 0
        }
        history.push("/characters/" + (id + 1))
    }


    const [data, setData] = useState(undefined)
    const [death, setDeath] = useState(undefined)
    const [quotes, setQuotes] = useState(undefined)

    useEffect(async () => {
        const res = await getAllCharacter(id)
        setData(res[0])
        const _death = await getApiResponse('death-count?name=' + res[0].name.replace(" ", "+"))
        setDeath(_death[0])
        const _quotes = await getApiResponse('quote?author=' + res[0].name.replace(" ", "+"))
        setQuotes(_quotes)
        console.log(_quotes)
    }, [id])

    if (!data || !death || !quotes) {
        return false
    }

    return (
        <div className='detail-body'>
            <div>

                <div className='detail-container'>
                    <div className='detail-img-container'><img src={data.img} className='detail-img'></img></div>
                    <div className='content-container'><p>Status :</p><div>{data.status}</div></div>
                    <div className='content-container'><p>Nom :</p><div>{data.name}</div></div>
                    <div className='content-container'><p>Surnom :</p><div>{data.nickname}</div></div>
                    <div className='content-container'><p>Deaths :</p><div>{death.deathCount}&#x1F480;</div></div>

                    <div className='occupation-container'>
                        <div><p>Occupation :</p></div>
                        <div className='occupation-list'>
                            {data.occupation.map((occupation) => {
                                return (
                                    <div className=''><div className='occupation'>{occupation}</div></div>
                                )
                            })}
                        </div>
                    </div>

                    {quotes.length != 0 ?
                        <div className='quotes-container'>
                            <p>Citations :</p>
                            <div className='quotes-list'>
                                {quotes.map((quote) => {
                                    return (
                                        <div className='quote'><div>· {quote.quote}</div></div>
                                    )
                                })}
                            </div>
                        </div>
                        : null
                    }
                </div >
                <div className='detail-nav-container'>
                    <div className='detail-nav-button detail-next-char' onClick={handleNextHistory}>◄</div>
                    <div className='detail-nav-button detail-previous-char' onClick={handlePrevHistory}>►</div>
                </div>
            </div>
        </div>
    )
}

export default CharDetails;