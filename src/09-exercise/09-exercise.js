import $ from "jquery";

function exercise09() {
  // Complete the code of the function
  let src = $("img").data("lazy");

  $("img").attr("src", src);

  $("img").removeAttr("data-lazy");
  $("img").removeData("lazy");
}

export default exercise09;
