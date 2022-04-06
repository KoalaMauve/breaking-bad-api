import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CharPreview from './charPreview';
import axios from 'axios'
import CharDetails from './charDetails';

export async function getAllCharacter(id) {
    var response = await axios.get("https://www.breakingbadapi.com/api/characters/" + id)
    return response.data
}
export async function getApiResponse(arg) {
    var response = await axios.get("https://www.breakingbadapi.com/api/" + arg)
    return response.data
}

function Home() {
    const [data, setData] = useState([])

    useEffect(async () => {
        setData(await getAllCharacter(""))
    }, [])


    console.log(data)
    return (
        <div class='container'>
            <div class='head-container'>
                <h1>Breaking Bad Zoo &#x1F690;</h1>
            </div>


            <div className='preview-container' >
                {
                    data.map((char) => {
                        console.log(char)
                        return (
                            <div>
                                <CharPreview char={char}></CharPreview>
                            </div>
                        )
                    })
                }
            </div >
        </div>
    )
}

export default Home;
