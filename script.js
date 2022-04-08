
let setUpEL = document.querySelector("#setUp");
let punchLineEL = document.querySelector("#punchLine");
let setUpBtnEl = document.querySelector("#setUpBtn")

fetch('https://manateejokesapi.herokuapp.com/manatees/random')
  .then(response => response.json())
  .then(data => {
      console.log(data);
      setUpBtnEl.addEventListener('click',function(){
        if(setUpEL.getAttribute('data-visible')==='hidden'){
          setUpEL.setAttribute('data-visible', 'visible');
          setUpEL.textContent = data.setup
        }
        else{
          setUpEL.setAttribute('data-visible', 'hidden');
          setUpEL.textContent = ''
        }
      })
      punchLineEL.textContent = data.punchline
  });


console.log("linked!")

