let jokeDisplayEL = document.querySelector("#jokeDisplay");


let setUpEL = document.querySelector("#setUp");
let punchLineEL = document.querySelector("#punchLine");

fetch('https://manateejokesapi.herokuapp.com/manatees/random')
  .then(response => response.json())
  .then(data => {
      console.log(data);
      setUpEL.textContent = data.setup
      punchLineEL.textContent = data.punchline
  });

