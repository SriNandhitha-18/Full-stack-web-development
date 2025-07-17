import React from "react";
function Greeting(name) {
    if (name.isloggedin) {
        return <h1>Welcome, {name.user}!</h1>;
    } else {
        return <h1>Please log in, {name.user}</h1>;
    }
}
export default Greeting;