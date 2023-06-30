import React from 'react'
import "./comment.scss"
import User from '../user-profile-icon/prof_icon&name'

export default function Comment(props) {
    return (
        <>
            <div className="comment">
                <div className="user-and-comment">
                    <div className="user">
                        <User />
                        <div className="anime-name"><p><span>Anime: </span><name-tag>{props.anime_name}</name-tag></p></div>
                    </div>
                    <div className="comment-text">
                        <p>
                            {props.comment}
                        </p>
                    </div>
                </div>
                <div className="anime-cover">
                    <img src={require(`../../data/cover-images/`+ props.cover_image)} alt="Unable to Load" />
                </div>
            </div>
        </>
    )
}
