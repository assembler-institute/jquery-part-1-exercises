import $ from "jquery";

import exercise17 from "../17-exercise/17-exercise";

describe("17-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<ul class="ex-list">
    <li class="ex-list-item">Lorem ipsum dolor.</li>
    <li class="ex-list-item">Amet repellat nemo sequi.</li>
    <li class="ex-list-item">Adipisicing elit.</li>
    <li class="ex-list-item">Sturp elitis elin.</li>
  </ul>`;
  });

  test("use the children() and each() methods to set the font weight to bold", () => {
    exercise17();

    $(".ex-list")
      .children()
      .each(function (i, element) {
        expect($(element).css("font-weight")).toBe("bold");
      });
  });
});
