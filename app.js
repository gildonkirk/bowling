function emptyInput() {
  $(document).on('click','.scoreInput', function() {
    if($('.scoreInput').val() === 'Enter Scores') {
      $(this).val('');
    }
  });
}
emptyInput();

$(document).on('click', '.scoreSubmit', function() {
  console.log($('.scoreInput').val());
});
