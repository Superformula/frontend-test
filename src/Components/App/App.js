import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        {props.children}
      </div>
    )
  }
}

export default App;