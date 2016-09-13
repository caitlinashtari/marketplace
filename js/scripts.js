$(document).ready(function() {
  $("#blanks form").submit(function(event){
    var item = $("#item").val();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var state = $("input:radio[name=state]:checked").val();

    $('.name').text(nameInput);
    $(".item").text(item);
    $('.address').text(addressInput);
    $('.city').text(cityInput);
    $(".state").text(state);

    $('#receipt').show();

    event.preventDefault();
  });
});
