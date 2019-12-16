import UserOutput from './userOutput/UserOutput';
import UserInput from './userInput/UserInput';

class App extends Component {
  state = {
    person: [
      {name: "Nastya", age: "24"},
      {name: "Serge", age: "33"},
      {name: "Dasha", age: "17"},
      {username: "Anastasiya's"}
    ]
  }
  switchUsernameHandler = (newUsername) => {
    this.setState({
      person: [
        {name: "Nastya", age: "24"},
        {name: "Serge", age: "33"},
        {name: "Dasha", age: "17"},
        {username: newUsername}
      ]
    })
  }

  userNameChangeHandler = (event) => {
    this.setState({
      person: [
        {name: "Nastya", age: "24"},
        {name: "Serge", age: "33"},
        {name: event.target.value, age: "17"},
        {username: "Anastasiya's"}
      ]
    })
  }
<button
onClick={() => this.switchUsernameHandler("Nastya's")}>Switch username</button>
<UserOutput name={this.state.person[3].username}
 click={this.switchUsernameHandler.bind(this, "Ana's")}>
</UserOutput>
<UserInput
changed={this.userNameChangeHandler} />
