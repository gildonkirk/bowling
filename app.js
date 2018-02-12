const scores = [];
const scoresInt = [];
emptyInput();

$(document).on('click', '.scoreSubmit', function() {
  inputToArray();
  for(i = 0; i < scores.length; i++) {
    let intValue = parseInt(scores[i]);
    scoresInt.push(intValue);
  }
  // const value = parseInt(scores[0]);
  console.log(scoresInt);
});

function inputToArray() {
  const textInput = $('.scoreInput').val();
  for(i = 0; i < textInput.length; i++) {
    scores.push(textInput[i]);
  };
  console.log(scores);
}

function emptyInput() {
  $(document).on('click','.scoreInput', function() {
    if($('.scoreInput').val() === 'Enter Scores') {
      $(this).val('');
    }
  });
}
