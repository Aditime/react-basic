import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

/*
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
    {name : 'Max', age : 28},
    {name : 'Max', age : 29},
    {name : 'Max', age : 24}
  ]
}

switchNameHandler = (newname) =>{
 // console.log("Was clicked");
 // Dont do this this.state.persons[0].name = 'Aditi Barua';
 this.setState(
  {
    persons: [
      {name : newname, age : 28},
      {name : 'menu', age : 29},
      {name : 'steve', age : 23}
    ]
  }
 )
}

nameChangedHandler = (event) =>{
  this.setState(
    {
      persons: [
        {name : 'Max', age : 28},
        {name : event.target.value, age : 29},
        {name : 'steve', age : 23}
      ]
    }
   )
}

   render() {
     const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border: '1px solid blue',
      padding : '8px'
     };

    return (
    <div className='App'> 
      <h1> This is my very first React App. It just covers basic React structure and features</h1>
      <button 
      style={style}
      onClick={ () => this.switchNameHandler('aditi barua') }>Switch here </button>
      <Person 
      name ={this.state.persons[0].name} 
      age = {this.state.persons[0].age}  />
      <Person 
      name ={this.state.persons[1].name}
      age = {this.state.persons[1].age} 
      click = {this.switchNameHandler.bind(this, 'abarua')}
      Changed = {this.nameChangedHandler}>
        Hobby : Dancing</Person>
      <Person 
      name ={this.state.persons[2].name} 
      age = {this.state.persons[2].age}  />
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