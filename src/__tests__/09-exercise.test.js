import $ from "jquery";

import exercise09 from "../09-exercise/09-exercise";

describe("09-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<img data-lazy="https://i.picsum.photos/id/204/300/300.jpg" src="" />`;
  });

  test("set the img src to be the data-lazy value using $", () => {
    exercise09();

    expect($("img").data("lazy")).toBeUndefined();

    expect($("img").attr("src")).toBe(
      "https://i.picsum.photos/id/204/300/300.jpg"
    );
  });
});
