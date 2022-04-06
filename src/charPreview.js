import './App.css';
import './charPreview.css'
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function CharPreview(props) {
    let history = useHistory();
    function handlePushHistory() {
        history.push("/characters/" + props.char.char_id)
    }

    return (
        <div class='character'
            onClick={handlePushHistory}
        >
            <img src={props.char.img} class='char-img'></img>
            <div class='char-btm'>
                <div>{props.char.name}</div></div>
        </div >
    )

}

export default CharPreview;
