import React, { useState, useEffect } from "react";




export const Traffic = () => {

    

    const [color1, setColor] = useState("red");
    const [color2, setColor2] = useState("yellow");
    const [color3, setColor3] = useState("green");
    const [button, setButton] = useState("red");

    return (
        <>

            <div className="Semaforo">
            <button className={`rounded-circle ${button === 'red' ? 'active' : 'none'}`}
                    onClick={() => {
                        setColor("red")
                        setButton("red")
                    }
                    }
                    style={{ backgroundColor: color1, width: '130px', height: '130px', boxShadow: button === 'red' ? '0 0 40px blue' : 'none'}}></button>
                    <button className={`rounded-circle ${button === 'yellow' ? 'active' : 'none'}`}
                    onClick={() => {
                        setButton("yellow")
                        setColor2("yellow")
                    }
                    }
                    style={{ backgroundColor: color2, width: '130px', height: '130px', boxShadow: button === 'yellow' ? '0 0 40px violet' : 'none' }}></button>
                    <button className={`rounded-circle ${button === 'green' ? 'active' : 'none'}`}
                    onClick={() => {
                        setButton("green")
                        setColor3("green")
                    }
                    }
                    style={{ backgroundColor: color3, width: '130px', height: '130px', boxShadow: button === 'green' ? '0 0 40px brown' : 'none' }}></button>
                

            </div>
        </>
    )
}