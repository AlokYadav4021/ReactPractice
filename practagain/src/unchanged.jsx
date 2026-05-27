import React, {useState} from "react" 
function Unchanged(){
    const [name, SetName] = useState("Gust")
    const [age, setAge] = useState(0);


    function handChange(event){
        SetName(event.target.value)
    }

    function Sage(event){
        setAge(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handChange} />
            <p>Name: {name} </p>
            <input value={age} onChange={Sage} type="number" />
            <p>Age: {age}</p>
        </div>
    )
}
export default Unchanged