import $ from "jquery";

function exercise14() {
  // Complete the code of the function
  $("#contact_form").submit(function (e) {
    e.preventDefault();

    if ($("#name").val() === "" && $("#email").val() === "") {
      $("#contact_form").append("<p>The values are empty</p>");
    }
  });
}

export default exercise14;
