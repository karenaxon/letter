$(document).ready(function() {
  $("#mainForm").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    
    $(".name").text(nameInput).val();

    $("#letter").show();
  });
});