// Write your Character component here


import React from "react"


  //Set components of character

  function StarWarsCharacter(props){
    const {onNewCharacter} = props
    const {onNewGender} = props
    return (
     
    <p> {onNewCharacter} Gender: {onNewGender} </p>

    )
 
  }

  export {StarWarsCharacter}