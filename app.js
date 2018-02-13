let scores = [];
let scoresByFrame = [];
emptyInput();

$(document).on('click', '.scoreSubmit', function() {
  scores = [];
  scoresByFrame = [];
  // inputToArray();
  parseValues();
  addFrames();
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
};

function addFrames() {
  for(i = 0; i < scores.length; i++) {
    let frameScore = 0;
    if(scores[i] === '-') {
      frameScore = (scores[i-1] + scores[i-2]);
      scoresByFrame.push(frameScore);
    } else if (i + 1 === scores.length) {
      frameScore = scores[i] + scores[i-1];
      scoresByFrame.push(frameScore);
    }
  }
  console.log(scoresByFrame);
}

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
