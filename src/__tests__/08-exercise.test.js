import $ from "jquery";

import exercise08 from "../08-exercise/08-exercise";

describe("08-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<img src="https://i.picsum.photos/id/204/300/300.jpg" />`;
  });

  test("use the attr() method to change the src of the img", () => {
    exercise08();

    expect($("img").attr("src")).toBe(
      "https://i.picsum.photos/id/33/300/300.jpg"
    );
  });
});
