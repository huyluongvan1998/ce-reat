import React from 'react'
// import SimpleReactValidator from 'simple-react-validator'

const formInput = ({changed, type, label, value, name, clicked, isValid}) => {
    return (
        <div className="form-group my-1" >
            <label className='text-left'>{label}
                <input 
                    onChange={changed}
                    type={type} 
                    className="form-control"
                    value={value}
                    name={name ? name : ''}
                    autoComplete= {name}
                    id={name}
                    onBlur={clicked} 
                    ></input>
                <small id="emailHelp" className="form-text text-danger">
                    {isValid ? isValid : `${label} required`}
                </small>
            </label>
        </div>
    )
}

export default formInput
