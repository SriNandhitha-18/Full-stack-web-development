import React,{useState} from "react";
function Mycomponent(){
    const [name, setName] = useState("Cat Name");
    const [age, setAge]= useState(0);
    const [isEmployed, setIsEmployed]=useState(false);
    const [isIncrement, setIsIncrement]=useState(0);
    const [isDecrement, setIsDecrement]=useState(20);
    const [isReset, setIsReset]=useState(0);
    const changeName = ()=> {
        setName("Isobel");
    }
    const changeAge =()=>{
        setAge(age+1);
    }
    const Employeestatus =()=>{
        setIsEmployed(!isEmployed);
    }
    const isIncremented = ()=> {
        setIsIncrement(isIncrement+1);
    }
    const isDecremented = ()=>{
        setIsDecrement(isDecrement-1);
    }
    const isResetDone = ()=>{
        setIsReset(isReset);

    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={changeName}>Click Me!</button>
            <p>Age: {age}</p>
            <button onClick={changeAge}>myAge</button>
            <p>isEmployed: {isEmployed ? "yes":"no"}</p>
            <button onClick={Employeestatus}>Yes/No</button> 
            <p>Increment: {isIncrement}</p>
            <button onClick={isIncremented}>Want more?</button> 
            <p>isEmployed: {isDecrement}</p>
            <button onClick={isDecremented}>Want less?</button> 
            <p>Reset: {isReset}</p> 
            <button onClick={isResetDone} >Reset</button>
        </div>
    );
}
export default Mycomponent;