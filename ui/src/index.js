import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import App from './app'

class AppContainer extends React.Component {

    render() {
        return <App/>

    }
}

let root = document.getElementById("app");

ReactDOM.render(<AppContainer />, root);
