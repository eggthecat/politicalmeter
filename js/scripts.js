$(function() {

  $("form#politics").submit(function(event) {
    event.preventDefault();
    var qOne = parseInt($("#qOne").val());
    var qTwo = parseInt($("#qTwo").val());
    var qThree = parseInt($("#qThree").val());

    if(qOne === 1 && qTwo === 1 && qThree === 1) {
      $("#Liberal").show();
      $("#Conservative").hide();
      $("#Moderate").hide();
    } else if (qOne === 2 && qTwo === 2 && qThree === 2) {
      $("#Conservative").show();
      $("#Liberal").hide();
      $("#Moderate").hide();
    } else {
      $("#Moderate").show();
      $("#Liberal").hide();
      $("#Conservative").hide();

    };

  });




});
// if ("qOne=yes && qTwo=yes && qThree=yes") {
//   $("#Liberal").show();
// } else if {
//   $("qOne=no && qTwo=no && qThree=no") { show();
// } else
