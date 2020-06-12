import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import styled, { css } from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Container = styled.div`
  text-align: center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  let [character, setcharacter] = useState([]);



  //Set components of character

  function StarWarsCharacter(props){
    const {onNewCharacter} = props

    return <p> {onNewCharacter} </p>
  }



  useEffect (() => {

    // const nextPhoto = () => {
    //   setPlanet(photoOfPlanet + 1);
    // }; //I want the index to increase by 1
  
    //Get Api
    axios
      .get(
        "https://swapi.dev/api/people/"
      )
      .then((response) => {
        setcharacter(response.data.results) ;
        let test = response.data.results;
         character = test.map(arr=>{   // Adds Title       
          return arr.name
         })
         console.log(character) //
   
    
      })
      .catch((error) => console.error(error));
  
      console.log("Use Effect is activated")
    // Axios End
    },[]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
 
<Wrapper>Hello</Wrapper>
<StarWarsCharacter  onNewCharacter = {character.name}  />

    </div>
  );
}

export default App;
