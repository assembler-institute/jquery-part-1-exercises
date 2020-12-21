import $ from "jquery";

function exercise06() {
  // Complete the code of the function
  $(".ex-list-item").each((i, element) => {
    $(element).css("background-color", "blue");
  });
}

export default exercise06;
