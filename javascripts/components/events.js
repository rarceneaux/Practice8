import {printToDom} from '../helpers/utli.js';



const jumboMaker = ()=> {
  const jumboPrint= `<div class="jumbotron">
  <h1 class="display-4">Practice Coding</h1>
  <p class="lead">This is a simple application starting with a click event and printing content to the DOM and Removing It Too!</p>
  <hr class="my-4">
  <p>Please click the button below to begin</p>
  <button id="btn1" class="btn btn-primary btn-lg">Click Me </button>
</div>`;
printToDom(jumboPrint,'jumboDiv');
btn1Clicked();
}

const cardMaker = () => {
  const cardPrint = ` <div class="card bg-light mb-10" style="max-width: 18rem;">
  <div class="card-header text-center">You Clicked the Btn!</div>
  <div class="card-body text-center">
    <h1 class="card-title text-center">I am H1 Text</h1>
    <form>
        <div class="form-group">
          <label for="formGroupExampleInput"></label>
          <input type="text" class="form-control" id="formInput" placeholder="">
        </div>
      </form>
    <p class="card-text">Keeping Going</p>
    <button id="btn2" class="btn btn-primary btn-lg">Click Me 2 Please </button>
    </div>
</div>`;
printToDom(cardPrint,'cardDiv');
$("#formInput").focus();
btn2Clicked();
};


const btn1Clicked = () =>{
  $("#btn1").on('click',cardMaker);
};

const btn2Clicked = () => {
$("#btn2").on('click', inputmaker);
};


const inputmaker = () =>{
  let userInput =  document.getElementById('formInput').value;
  const UserCard =`<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header text-center">${userInput}</div>
  <div class="card-body">
    <h5 class="card-title text-center">${userInput.toUpperCase()} Is Logged In</h5>
    <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <button id="btn3" class="btn btn-danger">Delete Me</button>
  </div>
</div>`;
$("#cardDiv").hide();
  printToDom(UserCard,'cardDiv2');
  btn3Clicked();
};

const clickedDeleteMe = () =>{
  $("#cardDiv2").hide();
};

const btn3Clicked = () => {
  $("#btn3").on('click',clickedDeleteMe);
};






export {jumboMaker};