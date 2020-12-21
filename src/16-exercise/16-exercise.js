import $ from "jquery";

function exercise16() {
  // Complete the code of the function
  $("#contact_form").submit(function (e) {
    e.preventDefault();

    $("#contact_form").after(`<p>Message Sent!</p>`);
  });
}

export default exercise16;
