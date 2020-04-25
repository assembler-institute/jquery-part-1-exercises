import $ from "jquery";

import exercise06 from "../06-exercise/06-exercise";

describe("06-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<ul class="ex-list">
    <li class="ex-list-item">Lorem ipsum dolor.</li>
    <li class="ex-list-item">Amet repellat nemo sequi.</li>
    <li class="ex-list-item">Adipisicing elit.</li>
    <li class="ex-list-item">Sturp elitis elin.</li>
  </ul>`;
  });

  test("use the each() method to style each list element", () => {
    exercise06();

    $(".ex-list-item").each((i, element) => {
      expect($(element).css("background-color")).toBe("blue");
    });
  });
});
