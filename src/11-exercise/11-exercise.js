import $ from "jquery";

function exercise11() {
  // Complete the code of the function
  $("img").on("mouseover", function (e) {
    $(e.target).css("border", "8px solid black");
  });
}

export default exercise11;
