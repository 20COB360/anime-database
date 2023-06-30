import React from 'react'
import './footer.scss'
export default function Footer() {
    return (
        <div className='footer'>
            <div className="social-box">
                <ul className="media-connect-list">
                    <li className="media-head">Follow us</li>
                    <li className="media-link"><a target="_blank" rel="noreferrer" href="https://github.com/20COB360"><i className="fab fa-instagram"></i></a>
                    </li>
                    <li className="media-link"><a target="_blank" rel="noreferrer" href="https://github.com/20COB360"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="media-link"><a target="_blank" rel="noreferrer" href="https://github.com/20COB360"><i className="fab fa-facebook"></i></a>
                    </li>
                    <li className="media-link"><a target="_blank" rel="noreferrer" href="https://github.com/20COB360"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li className="media-link"><a target="_blank" rel="noreferrer" href="https://github.com/20COB360"><i className="fab fa-quora"></i></a></li>
                </ul>
            </div>
        </div>
    )
}
