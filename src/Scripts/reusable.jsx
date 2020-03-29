import $ from "jquery";

$("a").click(function() {
  alert("The paragraph was clicked.");
  $(".menu ul li a").removeClass("active");
  this.addClass("active");
});
