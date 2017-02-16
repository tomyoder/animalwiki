
$(document).ready(function() {
  $("form#an").submit(function(event){
    var animal = $("#animal").val();
    console.log(animal);
    event.preventDefault();

    if (animal === "Turtles") {
      $("#ferret, #squirrel").hide();
      $("#turtle").show();
    } else if (animal === "Squirrels") {
      $("#ferret, #turtle").hide();
      $("#squirrel").show();
    } else if (animal === "Ferrets") {
      $("#turtle, #squirrel").hide();
      $("#ferret").show();
    }
  });
});
