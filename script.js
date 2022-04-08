let setUpEL = document.querySelector("#setUp");
let punchLineEL = document.querySelector("#punchLine");
let jokeBtn = document.querySelector("#getJoke");

function getRandomJoke() {
  fetch("https://manateejokesapi.herokuapp.com/manatees/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //disaply setup clicked
      setUpEL.textContent = data.setup;
      punchLineEL.textContent = data.punchline;
    });
}

jokeBtn.addEventListener("click", getRandomJoke);

getRandomJoke();
console.log("linked!");
