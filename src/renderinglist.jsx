import React from "react";
import Student from './student.jsx';
function RenderList({students}) {
    return (
        <div>
        {students.map((student, index)=>(
            <student key={index} {...student}/>
        ))
        }
        </div>
    );
}
export default RenderList;