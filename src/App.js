import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    person: [
      {id: "123", name: "Nastya", age: "24"},
      {id: "124", name: "Serge", age: "33"},
      {id: "125", name: "Dasha", age: "17"}
    ],
    otherState: "some other value",
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.person.slice(); copy array and save it on const
    const persons = [...this.state.person]; //does exactly the same as up above
    persons.splice(personIndex, 1);
    this.setState({person: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;

      this.setState( {person: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((persona, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={persona.name}
            age={persona.age}
            key={persona.id}
            changed={(event) => this.nameChangedHandler(event, persona.id)}
            />
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

    let classes = [];
    if(this.state.person.length <= 2) {
      classes.push('red');
    }

    if(this.state.person.length <= 1) {
      classes.push('bold');
    }

    return (
    <div className="App">
        <h1>
          Hi, I'm a React app!
        </h1>
        <p className={classes.join(" ")}>
        This is really working?
        </p>
        <button
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
    </div>
  );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
