import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component { 
  state = {
    showPoop: false
  }
  render() {
    return (
      <div className="App">
        <h1 onClick={() => this.setState({showPoop: !this.state.showPoop})}>
          Hello Poopface {this.state.showPoop ? '💩' : ''}
        </h1>
        <h2>Start editing to see some poop happen!</h2>
      </div>
    )
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
