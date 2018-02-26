let scores = [];
let scoresByFrame = [];
let frameScore = 0;
emptyInput();

$(document).on('click', '.scoreSubmit', function() {
  scores = [];
  scoresByFrame = [];
  parseValues();
  addFrames();
  console.log(scoresByFrame.reduce(calculateScore));
});

function addFrames() {
  for(i = 0; i < scores.length; i++) {
    if(scores[i] === '-') {
      scoring();
    };
    if(i + 1 === scores.length) {
      lastFrame();
    }
  }
  extraFrameDelete();
  console.log(scoresByFrame);
}

function scoring() {
  if(scores[i-1] === '/' && scores[i+1] != 'X') {
    frameScore = 10 + scores[i+1];
    scoresByFrame.push(frameScore);
  } else if(scores[i-1] === '/' && scores[i+1] === 'X'){
    frameScore = 10 + 10;
    scoresByFrame.push(frameScore);
  } else if(scores[i-1] === 'X' && scores[i+2] === '/'){
    frameScore = 10 + 10;
    scoresByFrame.push(frameScore);
  } else if(scores[i-1] === 'X' && scores[i+1] != 'X'){
    frameScore = 10 + (scores[i+1] + scores[i+2]);
    scoresByFrame.push(frameScore);
  } else if(scores[i-1] === 'X' && scores[i+1] === 'X'){
      if(scores[i+3] === 'X'){
        frameScore = 30;
      } else if(scores[i] === scores[scores.length-3] && scores[i+2] !== 'X' && scores[i+2] !== '-') {
        frameScore = 20 + scores[i+2];
      } else if(scores[i] === scores[scores.length-3] && scores[i+2] === 'X' && scores[i+2] !== '-') {
        frameScore = 30;
      } else {
        frameScore = 10 + 10 + scores[i+3];
      }
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

function extraFrameDelete() {
  if(scoresByFrame.length > 10) {
    scoresByFrame.pop();
  }
}

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

function calculateScore(total, x) {
  return total + x;
}

function emptyInput() {
  $(document).on('click','.scoreInput', function() {
    if($('.scoreInput').val() === 'Enter Scores') {
      $(this).val('');
    }
  });
};
