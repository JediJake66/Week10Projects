import React from "react";

function Article() {  

  const result = () => {
    let name = document.forms.moneyForm.name.value;
    if (name === "Jedi Jake") {
       alert("The force is strong with this one! You Win!!");
        
    } else {
        alert( "Oh man so close....but you didn't win this time! Better luck next time!")
    }
  };
  return (
    <div class="formContainer">
      <form name="moneyForm" class="moneyForm">
        <label for="name">Name :</label>
        <input type="text" id="name" name="name" />
        <br />
        <label for="email">Email :</label>
        <input type="text" id="email" name="email" />
        <br />
        <button onClick={result} class="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Article;
