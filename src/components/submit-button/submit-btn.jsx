import React from 'react'
import './submit-btn.scss'

export default function submitBtn(props) {
    return (
        <div className='button-wrapper'>
            <input type="submit" value={props.value} />
        </div>
    )
}
