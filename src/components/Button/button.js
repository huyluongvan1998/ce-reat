import React from 'react'

const button = ({content, clicked, colorType, type, size}) => {
    return (
        <div>
            <button 
                className={
                    `btn ${size? 'btn-'+size : 'btn-sm'} ${colorType?'btn-'+colorType: ''} ${type}`}
                onClick={clicked ? clicked : null}
            >

                {content}
            </button>
        </div>
    )
}

export default button
