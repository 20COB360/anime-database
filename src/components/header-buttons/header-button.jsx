// import React, { useState } from 'react'
import './header-button.scss'
import { Link } from 'react-router-dom'


export default function HeaderButton() {

    // const [x, setX] = useState(true);

    return (
        <div className='button-box'>
            <Link to='/'><button><i class="fa fa-home"></i><span> Home</span></button></Link>
            <Link to='/request'><button><i className="fa fa-pencil-square-o"></i><span> Request</span></button></Link>
            <Link to='/suggestion'><button><i className="fa fa-lightbulb-o"></i><span> Suggest</span></button></Link>
            <Link to='/support'><button><i className="fa fa-handshake-o"></i><span> Support Us</span></button></Link>
            <Link to='/about'><button><i className="fa fa-info-circle"></i><span> AboutUs</span></button></Link>
            {/* <Link to='/'><button><i className="fa fa-sign-in"></i><span> Login</span></button></Link> */}
        </div>
    )
}
