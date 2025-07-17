import React from "react";
function Events() {
    const handleClick=() => alert('Button clicked!');
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
export default Events;
function DoubleClickEvent() {
    const handleDoubleClick = () => alert('Button double clicked!');
    return (
        <div>
            <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
        </div>
    );
}
export default DoubleClickEvent;
 function MouseInEvent() {
    const handleMouseEnter = () => alert('Mouse entered!');
    return (
        <div>
            <button onMouseEnter={handleMouseEnter}>Hover Over Me</button>
        </div>
    );
}
export default MouseInEvent;

function MouseOutEvent() {
    const handleMouseLeave = () => alert('Mouse left!');
    return (
        <div>
            <button onMouseLeave={handleMouseLeave}>Hover out Me</button>
        </div>
    );
}
export default MouseOutEvent;

export function KeyboardEvent() {
    const handleKeyPress= (event) => {
        if (event.key==='Enter') {
            alert('Enter key pressed!');
        }
    };
    return <input type="text" onKeyPress= {handleKeyPress} placeholder="Press enter"/>;
}

export function KeyDownEvent() {
    const handleKeyDown = (event)=>{
        alert(`Key Down: ${event.key}`);
    };
    return <input type="text" onKeyDown={handleKeyDown} placeholder="Press any key"/>;
}