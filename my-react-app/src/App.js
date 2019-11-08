import React, { Component } from "react";
import "./App.css";
import "./userOutput/UserOutput.css";
import "./userInput/UserInput.css";
import UserOutput from "./userOutput/UserOutput";
import UserInput from "./userInput/UserInput";

class App extends Component {
  state = {
    attributes: [
      { name: "Anastasiya" },
      { library: "React" }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      attributes: [
        { name: newName },
        { library: "React" }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      attributes: [
        { name: "Anastasiya" },
        { library: event.target.value }
      ]
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <ol>
            <li>Create TWO new components: UserInput and UserOutput</li>
            <li>UserInput should hold an input element, UserOutput two paragraphs</li>
            <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
            <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
            <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
            <li>Add a method to manipulate the state (=> an event-handler method)</li>
            <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
            <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
            <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
            <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
          </ol>
        </div>
        <UserOutput
          name={this.state.attributes[0].name}
          click={this.switchNameHandler.bind(this, "Nastya")}
          library={this.state.attributes[1].library}>
        </UserOutput>
        <UserInput
          changed={this.nameChangeHandler} />
        <div className="Input">
          <button
            onClick={() => this.switchNameHandler("Ana")}>Switch name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
