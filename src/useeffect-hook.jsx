

/* useEffect=> A React Hook that lets you perform side effects in function components.It can be used to fetch data,
 directly interact with the DOM, and more. It runs after the render is committed to the screen.

useEffect()= React Hook that tells React Do SOME CODE WHEN(pick one):
1.After the first render or when the component mounts.
2.After every render or when the component unstable_batchedUpdates.
 */
/* useEffect(()=>{}) Runs after every render.
useEffect(()=>{},[])Runs only afer the first render or runs only on mount 
useEffect(()=>{},[value])runs on mount and when the value changes

used in 
1.Data fetching
2.Directly interacting with the DOM 
 */
import React,{ useState, useEffect} from "react";
function Mycomponent1(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title=`Count: ${count}`;
    }, {count});
function increment() {
    setCount(count+1);
}
function decrement(){
    if(count>0) {
        setCount(count-1)
    }
    else{
        alert("Count cannot be less than Zero");
    }
}
return(
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
)
}
export default Mycomponent1;