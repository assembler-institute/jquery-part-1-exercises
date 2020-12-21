import $ from "jquery";

function exercise13() {
  // Complete the code of the function
  $("#toggle_classes").click(function (e) {
    $(e.target).toggleClass("hovered");
  });
}

export default exercise13;
