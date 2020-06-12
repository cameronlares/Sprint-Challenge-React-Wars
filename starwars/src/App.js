import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled, { css } from "styled-components";
import { StarWarsCharacter } from "./components/Character";



const Wrapper = styled.div`

  width:70%;

  padding: 1em;
  margin: 2rem;
  margin-left: 6rem;
  border: 5px solid black;

    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

`;

const Container = styled.div`
width:100%
  text-align: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  let [character, setcharacter] = useState([]);

  useEffect(() => {
    //Get Api
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setcharacter(response.data.results);
        console.log(character); //
      })
      .catch((error) => console.error(error));

    console.log("Use Effect is activated");
    // Axios End
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* map through data here to return a character and pass data as props to character */}
      {character.map((arr) => {
        return (
          <Container>
            <Wrapper primary>
              {" "}
              <StarWarsCharacter
                onNewCharacter={arr.name}
                onNewGender={arr.gender}
              />
            </Wrapper>

            </Container>
         
        );
      })}

      {console.log(character)}
    </div>
  );
};

export default App;
