import $ from "jquery";

import exercise12 from "../12-exercise/12-exercise";

describe("12-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="ex-wrapper"></div>`;
  });

  test("create a ul list using $", () => {
    exercise12();

    expect($(".ex-list").hasClass("ex-list")).toBe(true);

    $(".ex-list")
      .children()
      .each(function (i, el) {
        expect($(el).hasClass("ex-list-item")).toBe(true);
      });
  });
});
