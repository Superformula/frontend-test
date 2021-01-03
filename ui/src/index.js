import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return <div>React working Ok</div>;
    }
}

let root = document.getElementById("app");

ReactDOM.render(<App />, root);
