import $ from "jquery";

function exercise12() {
  // Complete the code of the function
  let cities = ["Barcelona", "Madrid", "Sevilla"];

  let list = $("<ul></ul>");

  list.addClass("ex-list");

  cities.forEach((city) => {
    let li = $("<li></li>");

    li.text(city);

    li.addClass("ex-list-item");

    list.append(li);
  });

  $(".ex-wrapper").append(list);
}

export default exercise12;
