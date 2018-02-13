let scores = [];
const scoresInt = [];
emptyInput();

$(document).on('click', '.scoreSubmit', function() {
  scores = [];
  // inputToArray();
  parseValues();

});

function parseValues() {
  const textInput = $('.scoreInput').val();
  for(i = 0; i < textInput.length; i++) {
    if(textInput[i] != '-' && textInput[i] != 'X' && textInput[i] != '/') {
      let intValue = parseInt(textInput[i]);
      scores.push(intValue);
    } else {
      scores.push(textInput[i]);
    }
  }
  console.log(scores);
};

// function inputToArray() {
//   const textInput = $('.scoreInput').val();
//   for(i = 0; i < textInput.length; i++) {
//     scores.push(textInput[i]);
//   };
//   console.log(scores);
// }

function emptyInput() {
  $(document).on('click','.scoreInput', function() {
    if($('.scoreInput').val() === 'Enter Scores') {
      $(this).val('');
    }
  });
}
