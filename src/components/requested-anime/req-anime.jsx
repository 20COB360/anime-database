import React from 'react'
import './req-anime.scss'
export default function reqAnime(props) {
    return (
        <>
            <div className="requested">
                <div className="item">
                    <div className="anime-name">
                        <p>{props.anime}</p>
                    </div>
                    <div className="votes">
                        <p>{props.vote}</p>
                        <i class="fa fa-plus"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
