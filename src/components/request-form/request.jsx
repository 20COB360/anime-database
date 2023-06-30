import React from 'react'
import "./request.scss"
import ReqAnime from '../requested-anime/req-anime'
import SubmitBtn from '../submit-button/submit-btn'
function Request() {
    return (
        <>
            <div className="request-form">
                <input type="text" name="anime_request" id="anime_request" placeholder='Enter anime you want to request' />
                <SubmitBtn
                    value="REQUEST"
                />
            </div >
            <h1>Most requested anime</h1>
            <div className="requested-anime-container">
                <ReqAnime
                    anime="Horimiya"
                    vote="500"
                />
                <ReqAnime
                    anime="Genious prince's guide in raising a nation out of deabt"
                    vote="345"
                />
                <ReqAnime
                    anime="Combatants will be dispatched"
                    vote="454"
                />
                <ReqAnime
                    anime="Charlotte"
                    vote="355"
                />
                <ReqAnime
                    anime="That time I got reincarnated as a slime"
                    vote="1211"
                />
                <ReqAnime
                    anime="Assassination Classroom"
                    vote="224"
                />
                <ReqAnime
                    anime="Devil is a part timer"
                    vote="284"
                />
                <ReqAnime
                    anime="Arifureta"
                    vote="575"
                />
            </div>
        </>
    )
}

export default Request
