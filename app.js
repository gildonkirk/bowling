// Initialize variables, used let because not constant
let scores = [];
let scoresByFrame = [];
let frameScore = 0;
let fullScore = 0;

// Empties input field when it is clicked on if the input field === "Enter Scores"
emptyInput();

// Runs functionality of application
$(document).on('click', '.scoreSubmit', function() {
  // Resets variables in case entering scores more than once
  scores = [];
  scoresByFrame = [];
  // Changes input from string to integers as long as input is not 'X', '/', or '-'
  parseValues();
  // Gives every frame a numerical score, based on bowling scoring rules
  addFrames();
  // Adds all frames together. Runs through array and executes calculateScore function for each index
  let fullScore = scoresByFrame.reduce(calculateScore);
  // Updates html element to show score, using template literals
  $('.score').text(`Score: ${fullScore}`);
});

function addFrames() {
  for(i = 0; i < scores.length; i++) {
    // If index is a dash, score the frame before it
    if(scores[i] === '-') {
      scoring();
    };
    // If it is the last frame, score it
    if(i + 1 === scores.length) {
      lastFrame();
    }
  }
  // If you had extra throws on the last frame, this deletes them from array after their effect is scored
  extraFrameDelete();
}

function scoring() {
  // Scores frame with a spare and no strike following
  if(scores[i-1] === '/' && scores[i+1] != 'X') {
    frameScore = 10 + scores[i+1];
    scoresByFrame.push(frameScore);
  // Scores frame with a spare followed by a strike
  } else if(scores[i-1] === '/' && scores[i+1] === 'X'){
    frameScore = 10 + 10;
    scoresByFrame.push(frameScore);
  // Scores frame with a strike followed by a spare
  } else if(scores[i-1] === 'X' && scores[i+2] === '/'){
    frameScore = 10 + 10;
    scoresByFrame.push(frameScore);
  // Scores frame with a strike an no strike or spare following
  } else if(scores[i-1] === 'X' && scores[i+1] != 'X'){
    frameScore = 10 + (scores[i+1] + scores[i+2]);
    scoresByFrame.push(frameScore);
  // Scores frame with a strike followed by a strike
  } else if(scores[i-1] === 'X' && scores[i+1] === 'X'){
    strikeScoring();
  } else {
    // Frame without spare or strike
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
  // Removes last element of an array
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

function strikeScoring() {
  // If next two throws are strikes, frame === 30
  if(scores[i+3] === 'X'){
    frameScore = 30;
  // If scoring the last frame, and first extra throw is a strike not followed by a strike
  } else if(scores[i] === scores[scores.length-3] && scores[i+2] !== 'X' && scores[i+2] !== '-') {
    frameScore = 20 + scores[i+2];
  // If scoring the last frame, and first extra throw is a strike followed by a strike
  } else if(scores[i] === scores[scores.length-3] && scores[i+2] === 'X' && scores[i+2] !== '-') {
    frameScore = 30;
  // If you have two strikes in a row, not followed by strike or spare
  } else {
    frameScore = 10 + 10 + scores[i+3];
  }
  scoresByFrame.push(frameScore);
}

function calculateScore(total, x) {
  return total + x;
};

// "this" refers to the html element '.scoreInput', specifically a jquery selector
function emptyInput() {
  $(document).on('click','.scoreInput', function() {
    if($('.scoreInput').val() === 'Enter Scores') {
      $(this).val('');
    }
  });
};
