let scores = [];
let scoresByFrame = [];
let frameScore = 0;
emptyInput();

$(document).on('click', '.scoreSubmit', function() {
  scores = [];
  scoresByFrame = [];
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
    if(scores[i] === '-') {
      checkForSparesAndStrikes();
    } else if (i + 1 === scores.length) {
      lastFrame();
    }
    // else if (scores[i] === '/')
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
function checkForSparesAndStrikes() {
  if(scores[i-1] === '/') {
    frameScore = 10 + scores[i+1];
    scoresByFrame.push(frameScore);
  } else if(scores[i-1] === 'X'){
    frameScore = 10 + (scores[i+1] + scores[i+2]);
    scoresByFrame.push(frameScore);
  } else {
    frameScore = (scores[i-1] + scores[i-2]);
    scoresByFrame.push(frameScore);
  };
};

function lastFrame() {
  frameScore = scores[i] + scores[i-1];
  scoresByFrame.push(frameScore);
};

function emptyInput() {
  $(document).on('click','.scoreInput', function() {
    if($('.scoreInput').val() === 'Enter Scores') {
      $(this).val('');
    }
  });
};
