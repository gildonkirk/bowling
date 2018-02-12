const scores = [];
function emptyInput() {
  $(document).on('click','.scoreInput', function() {
    if($('.scoreInput').val() === 'Enter Scores') {
      $(this).val('');
    }
  });
}
emptyInput();

$(document).on('click', '.scoreSubmit', function() {
  const textInput = $('.scoreInput').val();
  for(i = 0; i < textInput.length; i++) {
    scores.push(textInput[i]);
  };
  console.log(scores);
});
