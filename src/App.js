import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

/*

App.js is a comtainer which extends component and it has a state property, 
JSX restriction - 
you need to change certain keywords, for example, class to className in the html like tag
You can only have one root element.

state :
usestate  returns an array that holds exactly two elements. first elemet is our current state and
second element is a function to update the current state such that React is aware of it and render the updated state.
State hooks function does not merge the updated state with the old state. it simply replaces the old state. 
every components recives props 
and since react 16 , every component can also use state. Prior to that we could only do that for class component , now we can do it for function component also. 

Passing parameter to onClick - there are two ways 
1) bind(this, value of the parameter) -  click = {this.switchNameHandler.bind(this, 'abarua')}
2) arrow function () => this.switchNameHandler('aditi barua') try to avoid this one as it will cause performance issue. 

*/

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Aditi", age: 28 },
      { id: "2", name: "Max", age: 29 },
      { id: "3", name: "Steve", age: 24 },
    ],
    otherState: "Some other value",
    showPersons: false,
  };

  /*switchNameHandler = (newname) => {
    // console.log("Was clicked");
    // Dont do this this.state.persons[0].name = 'Aditi Barua';
    this.setState({
      persons: [
        { name: newname, age: 28 },
        { name: "menu", age: 29 },
        { name: "steve", age: 23 },
      ],
    });
  };*/

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      // p is every person in the person state
      return p.id === id;
    });

    const person = {
      // the spread operator is copying the stete to prevent mutation.
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]); this is for copying the state.

    person.name = event.target.value; // we are assigning the name of the person to what we got from input
    const persons = [...this.state.persons]; // copy the state into persons.
    persons[personIndex] = person; // assign the person in the persons in the perticular index
    this.setState({ persons: persons }); // the persons back to the state.
  };

  //update states in not changed approach
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;  // this mutates the original state which is not a good practice. Below are the two solution.
    // const persons = this.state.persons.slice(); // this creates a copy of the original states.
    const persons = [...this.state.persons]; //this is the spread operator, this creates a copy of the original state
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id} //unique identifier so that React can identify all the components.
                Changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h4>Click each component to make the disappear</h4>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Components
        </button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'This is really working!!!'));
  }
}
export default App;

/*

React hooks example 
import React, { useState } from 'react';
//class App extends Component {
  const app  = props =>{
   const [personsState, setPersonsState] =  useState( // disconstring 
      {
        persons: [
          {name : 'Max', age : 28},
          {name : 'Max', age : 29},
          {name : 'Max', age : 24}
        ]
      } );

      const [otherState, setOtherState] =  useState('some other state');

      console.log(personsState,otherState);

    const switchNameHandler = () =>{
     // console.log("Was clicked");
     // Dont do this this.state.persons[0].name = 'Aditi Barua';
     setPersonsState({
        persons: [
          {name : 'aditi barua', age : 28},
          {name : 'menu', age : 29},
          {name : 'steve', age : 27}
        ],
  
     });
    };
    
    return (
    <div className='App'> 
      <h1> Hi This is Aditi</h1>
      <button onClick={switchNameHandler}>Switch here </button>
      <Person name ={personsState.persons[0].name} age = {personsState.persons[0].age}  />
      <Person name ={personsState.persons[1].name} age = {personsState.persons[1].age} >Hobby : Dancing</Person>
      <Person name ={personsState.persons[2].name} age = {personsState.persons[2].age}  />
      </div> 
    );
//return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'This is really working!!!'));
  }

export default app;

*/
