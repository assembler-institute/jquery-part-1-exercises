import $ from "jquery";

function exercise15() {
  // Complete the code of the function
  $("#contact_form").submit(function (e) {
    e.preventDefault();

    $("#contact_form").append(
      `<p>${$("#name").val()}, ${$("#email").val()}</p>`
    );
  });
}

export default exercise15;
