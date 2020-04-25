import $ from "jquery";

import exercise02 from "../02-exercise/02-exercise";

describe("02-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<button disabled="true">Decrement</button>`;
  });

  test("select the disabled button with attribute selectors and set the styles", () => {
    exercise02();

    expect($("button[disabled]").css("border")).toBe("2px solid black");
  });
});
