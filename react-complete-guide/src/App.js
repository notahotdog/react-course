import React, { Component } from "react";
import { useState } from "react";
import "./App.css";
import Person from "./Person/Person"; //Caps to identify custom component

// const app = (props) => {
//   const [personState, setPersonsState] = useState({
//     persons: [
//       { name: "Derrick2", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Jamarcus", age: 26 },
//     ],
//     otherstate: "some other value",
//   });

//   const [secondState, setSecondState] = useState("Second State");
//   console.log(personState, secondState);

//   //Can have multiple useState, to differentiate between the different
//   //types of state, this is to avoid unnecessary renaming of states whenever we reinitialize.

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "bob", age: 28 },
//         { name: "Manu", age: 29 },
//         { name: "Jamarcus", age: 26 },
//       ],
//       otherstate: personState.otherstate,
//     });
//   };

//   return (
//     <div className="App">
//       <h1>React Element</h1>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age}
//       >
//         {" "}
//         My hobbies: Racing
//       </Person>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age}
//       >
//         {" "}
//         My hobbies: Racing
//       </Person>
//       <button onClick={switchNameHandler}> Switch Name </button>
//     </div>
//   );
// };

// export default app;

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Jamarcus", age: 26 },
    ],
    otherstate: "somestate",
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Jamarcus", age: 26 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Jamarcus", age: 26 },
      ],
    });
  };

  render() {
    const someStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8 px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>React Element</h1>
        <t> this is really working</t>
        <button style={someStyle} onClick={() => this.switchNameHandler("bob")}>
          {" "}
          Switch Name{" "}
        </button>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          {" "}
          My hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Max")}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        ></Person>
      </div>
    );
    // return React.createElement(
    //   "div",
    //   {className : 'App'},
    //   "h1",
    //   React.createElement("h1", null, "Hi im a react app")
    // );
  }
}
export default App;
