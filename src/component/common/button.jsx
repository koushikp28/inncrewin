import React from 'react'

function Button(props) {
    const { title, classes = "btn btn-primary", onClick} = props

    const handleButtonClick = () => {
        if(onClick && (typeof onClick === "function")){
            props.onClick()
        }
    }

    return (
        <button className={`${classes}`} onClick={handleButtonClick}>{title}</button>
    )
}

export default Button
