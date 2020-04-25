import $ from "jquery";

import exercise10 from "../10-exercise/10-exercise";

describe("10-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="ex-wrapper">
    <div class="spacer">
      <button class="btn">Hide Image</button>
    </div>
    <img src="https://i.picsum.photos/id/204/300/300.jpg" />
  </div>`;
  });

  test("hide the image when the button is clicked using $", () => {
    exercise10();

    $(".btn").trigger("click");
    expect($("img").css("display")).toBe("none");
  });
});
