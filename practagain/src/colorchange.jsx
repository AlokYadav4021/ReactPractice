import React, {useState} from "react";

function ColorChange(){
    let [color, setColor] = useState('black')

    function changeColor(event){
        setColor(event.target.value)
    }

    return(
        <div>
            <h3>Color Picker</h3>
            <div className="display" style={{backgroundColor:color}}>
                <p>Select Color : {color}</p>
            </div>

            <input type="color" value={color} onChange={changeColor} />

        </div>
    )
}

export default ColorChange