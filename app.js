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

function addFrames() {
  for(i = 0; i < scores.length; i++) {
    if(scores[i] === '-') {
      scoring();
    };
    lastFrame();
  }
  console.log(scoresByFrame);
}

function scoring() {
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
  if(i + 1 === scores.length) {
    frameScore = scores[i] + scores[i-1];
    scoresByFrame.push(frameScore);
  }
};

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

function emptyInput() {
  $(document).on('click','.scoreInput', function() {
    if($('.scoreInput').val() === 'Enter Scores') {
      $(this).val('');
    }
  });
};
