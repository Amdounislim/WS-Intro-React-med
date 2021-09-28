import React from 'react'
import "./Cards.css"

const Cards = () => {
    let clients = [{
        src: "https://www.docplanner.com/icons/icon-patients.svg",
        title: "For patients",
        desc: "Find a doctor, book a visit and solve any health-related doubt",
        color: "#00ccb1",
        country: ["Tunis", "France", "Italy"]
    },
    {
        src: "https://www.docplanner.com/icons/icon-doctors.svg",
        title: "For doctors",
        desc: "Save time managing visits and cut no-shows by half",
        color: "#3d83df",
        country: ["Alge", "Egypt", "Italy"]
    },
    {
        src: "https://www.docplanner.com/icons/icon-clinics.svg",
        title: "For clinics",
        desc: "Deliver an exceptional patient experience in your clinic",
        color: "#1b2734"
    }
    ]
    return (
        <div className="list" >
            {clients.map(el => (
                <div className="card" style={{ backgroundColor: el.color }}>
                    <img src={el.src} />
                    <h3>{el.title}</h3>
                    <p>{el.desc}</p>
                    {el.country && <select>
                        {el.country.map(count => <option>{count}</option>)}
                    </select>}
                </div>
            ))}
        </div>
    )
}

export default Cards
