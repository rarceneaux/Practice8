console.log('events.js');

import {printToDom} from '../helpers/utli.js';

// const testThis = (stringToPrint,divId) => {
//   let testString = '';
//   testString += `<h1>Test String</h1>`;
//   printToDom(testString,'testDiv');
// };

const jumboMaker = ()=> {
  const jumboPrint= `<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <button id="btn1" class="btn btn-primary btn-lg">Click Me </button>
</div>`;
printToDom(jumboPrint,'jumboDiv');
btn1Clicked();
}

const cardMaker = () => {
  const cardPrint = ` <div class="card bg-light mb-10" style="max-width: 18rem;">
  <div class="card-header text-center">Header</div>
  <div class="card-body text-center">
    <h5 class="card-title text-center">Light card title</h5>
    <form>
        <div class="form-group">
          <label for="formGroupExampleInput"></label>
          <input type="text" class="form-control" id="formInput" placeholder="">
        </div>
      </form>
    <p class="card-text">Some </p>
    <button id="btn2" class="btn btn-primary btn-lg">Click Me 2 </button>
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
  let userDiv = document.createElement('div');
  userDiv.id = "userText";
  document.body.appendChild(userDiv);
  let userInput =  document.getElementById('formInput').value;
  userDiv.innerHTML = userInput;
  $("#cardDiv").hide();
  // alert(userInput + " is a jr software developer");
  document.body.appendChild(userDiv);
};






export {jumboMaker};