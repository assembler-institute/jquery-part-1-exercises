import $ from "jquery";

import exercise20 from "../20-exercise/20-exercise";

describe("20-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<ul class="ex-list">
    <li class="ex-list-item">Lorem ipsum dolor.</li>
    <li class="ex-list-item excluded">Amet repellat nemo sequi.</li>
    <li class="ex-list-item">Adipisicing elit.</li>
    <li class="ex-list-item">Sturp elitis elin.</li>
  </ul>`;
  });

  test("use the not() method to exclude the list item and change the styles", () => {
    exercise20();

    $(".ex-list-item")
      .not(".excluded")
      .each(function (i, element) {
        expect($(element).css("background-color")).toBe("red");
      });
  });
});
