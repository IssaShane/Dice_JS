// executes on every keypress
// calculates a random number between 1 and 6, and then applies a transformation
//  to the corresponding face
// requires: div-faces class must contain 6 members
// effects: applies transformation
window.addEventListener('keydown', function(e) {
  console.log("hey look");
  var rand = Math.random()*6;
  rand++;
  var result = Math.floor(rand);
  console.log(result);
  let faces = document.getElementsByClassName("face");
  console.log(faces[result-1]);
  faces[result-1].classList.add('selected');
});

// removeSelection(e) removes the CSS action .select from the element e
function removeSelection(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('selected');
}

// get all faces
const faces = document.querySelectorAll('.face');
// apply removeSelection(e) to each face member
//  removeSelection(e) will then activate when .select reaches transitionend
faces.forEach(face => face.addEventListener('transitionend', removeSelection));
