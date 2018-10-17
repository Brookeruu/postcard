$(document).ready(function(){
  $("#formOne").submit(function(event){
    var streetAddressInput = $("input#streetAddress").val();
    var cityStateInput = $("input#cityState").val();
    var zipCodeInput = $("input#zipCode").val();
    var nameInput = $("input#name").val();

    $(".streetAddress").text(streetAddressInput);
    $(".cityState").text(cityStateInput);
    $(".zipCode").text(zipCodeInput);
    $(".name").text(nameInput);

    $("#postcard").show();

    event.preventDefault();

  });
});
