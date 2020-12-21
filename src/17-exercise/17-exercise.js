import $ from "jquery";

function exercise17() {
  // Complete the code of the function
  $(".ex-list")
    .children()
    .each((i, element) => {
      $(element).css("font-weight", "bold");
    });
}

export default exercise17;
