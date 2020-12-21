import $ from "jquery";

function exercise11() {
  // Complete the code of the function
  $("img").mouseover(function (e) {
    $(e.target).css("border", "8px solid black");
  });
}

export default exercise11;
