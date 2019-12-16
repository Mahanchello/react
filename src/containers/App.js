import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    person: [
      {id: "123", name: "Nastya", age: 24},
      {id: "124", name: "Serge", age: 33},
      {id: "125", name: "Dasha", age: 17}
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
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

      this.setState((prevState, props) => {
        return {
          person: persons,
          changeCounter: prevState.changeCounter + 1
        };
      });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({autheticated: true})
  }

  // componentWillUnmount() {
  //   console.log('[App.js] componentWillUnmount')
  // }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if(this.state.showPersons) {
      persons = (
          <Persons
            person={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.autheticated}
            />
      );
    }

    return (
    <Aux>

    <button
      onClick={() => {
        this.setState({ showCockpit: false });
    }}
    >
    Remove cockpit
    </button>
    <AuthContext.Provider value={{
      authenticated: this.state.authenticated,
      login: this.loginHandler
    }}
    >
      {this.state.showCockpit ? (
        <Cockpit
      title={this.props.appTitle}
      showPersons={this.state.showPersons}
      personLength={this.state.person.length}
      clicked={this.togglePersonsHandler}
      />
    ) : null}
      {persons}
    </AuthContext.Provider>
    </Aux>
  )
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
