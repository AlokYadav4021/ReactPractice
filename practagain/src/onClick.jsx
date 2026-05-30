function Onclick(){
    let count = 0;
    let oclick =()=>{
        if (count < 2){
            console.log("You have done a greate job")
            count ++;
        }
        else{
            console.log("Bas kar bhai or kitna click karega")
        }
    }
    return(
        <button onClick={oclick}>Click me!!</button>
    )
}
export default Onclick