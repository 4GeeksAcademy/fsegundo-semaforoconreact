import React, { useState, useEffect } from "react";




export const Traffic = () => {

    const colors = ["yellow", "green", "red"];

    const [color, setColor] = useState(colors);

    return (
        <>

            <div className="Semaforo">
                <button className="rounded-circle"
                    onClick={() => {
                        const index = Math.floor(Math.random() * colors.length)
                        setColor(colors[index])
                    }
                    }
                    style={{ backgroundColor: color, width: '130px', height: '130px' }}></button>
                    <button className="rounded-circle"
                    onClick={() => {
                        const index = Math.floor(Math.random() * colors.length)
                        setColor(colors[index])
                    }
                    }
                    style={{ backgroundColor: color, width: '130px', height: '130px' }}></button>
                    <button className="rounded-circle"
                    onClick={() => {
                        const index = Math.floor(Math.random() * colors.length)
                        setColor(colors[index])
                    }
                    }
                    style={{ backgroundColor: color, width: '130px', height: '130px' }}></button>
                

            </div>
        </>
    )
}