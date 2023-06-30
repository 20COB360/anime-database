import React from 'react'
import './suggestion-form.scss'
import SubmitBtn from '../submit-button/submit-btn'
import image from '../../static-images/kakashi.png'
export default function SuggestionForm() {
    return (
        <>
            <div className="wrapper">
                <div className="suggestion-form">
                    <h1>Got Ideas!</h1>
                    <h1>We are always ready to IMPROVE</h1>
                    <input type="text" name="suggestion_area" id="suggestion_area" placeholder='Where would you like us to improve' />
                    <textarea name="suggestion" id="suggestion" cols="30" rows="10" placeholder='Your suggestion here'></textarea>
                    <SubmitBtn
                        value="SUGGEST"
                    />
                </div>
                <div className="side-image">
                    <img src={image} alt="Unable to Load" />
                </div>
            </div>
        </>
    )
}
