import React, { useState } from "react";

function Usestate (){
    const [name, setName] = useState('guest');
    const [age, setAge] = useState(0);
    const [student, setStudent] = useState(true);

    let sname = () => {
        setName("Karan");
    }
    let Yage = () => {
        setAge(age + 1 )
    }
    let Ystudent = () => {
        setStudent(!student)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={sname} > Name </button>
            <p>Age : {age}</p>
            <button onClick={Yage}>Age</button>
            <p> Student : {student ? 'yes' : 'No'}</p>
            <button onClick={Ystudent}>Student?</button>
        </div>
    )
}
export default Usestate