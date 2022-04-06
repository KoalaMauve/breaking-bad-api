import './App.css';
import './loader.css'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getAllCharacter } from './home';

function Loader() {
    return (<div className='loader-container'><div className="loader" ></div ></div>)
}

export default Loader;