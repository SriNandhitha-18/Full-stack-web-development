
function Student(props) {
    return (
        <div>
            <center>
                <h1 style={{color: "purple", textAlign: "center", padding: "5px"}}>Student Information</h1>
                <p style={{color: "pink", textAlign: "center", padding: "5px"}}>Name: {props.name}</p>
                <p style={{color: "blue", textAlign: "center", padding: "5px"}}>Age: {props.age}</p>
                <p style={{color: "yellow", textAlign: "center", padding: "5px"}}>is a student: {props.isStudent ? "Yes" : "No" }</p>
            </center>
        </div>     
    );
    }
export default Student;