import $ from "jquery";

import exercise13 from "../13-exercise/13-exercise";

describe("13-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<button id="toggle_classes">Toggle class</button>`;
  });

  test("toggle the class `hovered` using $", () => {
    exercise13();

    $("#toggle_classes").trigger("click");
    expect($("#toggle_classes").hasClass("hovered")).toBe(true);

    $("#toggle_classes").trigger("click");
    expect($("#toggle_classes").hasClass("hovered")).toBe(false);
  });
});
