import $ from "jquery";

import exercise11 from "../11-exercise/11-exercise";

describe("11-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="ex-wrapper">
    <img src="https://i.picsum.photos/id/204/300/300.jpg" />
  </div>`;
  });

  test("set a 8px border on the image on mouseover using $", () => {
    exercise11();

    $("img").trigger("mouseover");
    expect($("img").css("border")).toBe("8px solid black");
  });
});
