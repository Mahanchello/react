import React, { PureComponent } from "react";
import Person from "./Person/Person";
// import AuthContext from "../../context/auth-context"


class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps")
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldUpdateComponent");
  //   if(nextProps.person !== this.props.person ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate")
    return {message: "Snapshot!"};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate")
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount')
  }

  render () {
    console.log('[Persons.js] rendering...')
     return (this.props.person.map((persona, index) => {
        return (
        <Person
          click={() => this.props.clicked(index)}
          name={persona.name}
          age={persona.age}
          key={persona.id}
          changed={(event) => this.props.changed(event, persona.id)}
          />
        )
      })
    );
  }
}


export default Persons;
