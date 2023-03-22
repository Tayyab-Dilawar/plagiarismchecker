import React from 'react'

const Testing = ({ color, percentage }) => {

    const precentageValue = percentage <= 50 ? percentage * 2 : 100 - ((percentage - 50) * 2)

    const style = {
        // margin: "25px",
        width: "170px",
        height: "170px",
        borderRadius: "50%",
        border: "10px solid transparent",
        backgroundSize: `${percentage < 50 ? `100% 100%, ${precentageValue}% 50%, 100% 100%, 100% 100%` : `100% 100%, 50% ${precentageValue}%, 100% 100%, 100% 100%`}`,
        backgroundRepeat: "no-repeat",
        backgroundImage: `
            linear-gradient(#ececec, #ececec),
            linear-gradient(360deg, lightgrey 100%, lightgrey 100%),
            linear-gradient(360deg, ${color} 100%, lightgrey 100%)
        `,
        backgroundPosition: "center center, left top, right top, left bottom, right bottom",
        backgroundOrigin: "content-box, border-box, border-box, border-box, border-box",
        backgroundClip: "content-box, border-box, border-box, border-box, border-box",
        transform: `${percentage < 50 ? "rotate(90deg)" : "rotate(0deg)"}`,
    }

    return (
        <section className='circle-section'>
            <div className='circle-section-text'>{percentage}%</div>
            <div style={style}>
            </div>
        </section>
    )
}

export default Testing