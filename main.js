// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';


let button = document.querySelector(".like-glyph");

button.addEventListener('click', like);

function like() {
  const likeShape = button.textContent;
  if(likeShape==EMPTY_HEART) {
    button.textContent = FULL_HEART;
  } else {
    button.textContent = EMPTY_HEART;
  }
  //   catch(err) {
  //   message.innerHTML = "Input is " + err;
  // }

}














//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
