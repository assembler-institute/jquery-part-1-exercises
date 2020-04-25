import $ from "jquery";

import exercise04 from "../04-exercise/04-exercise";

describe("04-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<ul class="ex-list">
    <li>Lorem ipsum dolor.</li>
    <li id="main">Amet repellat nemo sequi.</li>
    <li>Adipisicing elit.</li>
  </ul>`;
  });

  test("use the next() method to style the next element", () => {
    exercise04();

    expect($("#main").next().css("border")).toBe("2px solid black");
  });
});
