import $ from "jquery";

import exercise07 from "../07-exercise/07-exercise";

describe("07-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<input type="checkbox" name="accept" id="accept" />`;
  });

  test("use the prop() method to set the checkbox property to true", () => {
    exercise07();

    expect($(":checkbox").prop("checked")).toBe(true);
  });
});
