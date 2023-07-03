import './image.css';
import React from 'react'
import back from '../assets/back.jpeg'
import { Link } from 'react-router-dom';

const Back = () => {
  return (
    <div className='back'>
    <div className='mask'>
    <img className='into-img' src={back} alt='back' />
    </div>
    <div className='content'>
     <p>HI, I'M A RINAL</p>
     <h1>React Developer.</h1>
     <div>
       <Link to="/project" className='btn'>Project</Link>
       <Link to="/contact" className='btn btn-light'>Contact</Link>
     </div>
    </div>

    </div>
  )
}

export default Back